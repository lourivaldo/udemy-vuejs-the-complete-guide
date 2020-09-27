class Player {
    constructor(name, maxDamage = 10) {
        this.name = name;
        this.life = 100;
        this.maxDamage = maxDamage;
    }

    calcRand(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    applyDamage(damage) {
        let life = this.life - damage;
        this.life = Math.max(life, 0);
    }

    attack(otherPlayer) {
        const damage = this.calcRand(this.maxDamage);
        otherPlayer.applyDamage(damage);
        return damage;
    }

    isLowLife() {
        return this.life <= 20;
    }

    isDead() {
        return this.life <= 0;
    }
}

class Hero extends Player {
    constructor(name) {
        super(name);
    }

    specialAttack(otherPlayer) {
        const damage = this.calcRand(this.maxDamage * 2);
        otherPlayer.applyDamage(damage);
        return damage;
    }

    heal() {
        const damage = this.calcRand(this.maxDamage);
        const heal = this.calcRand(this.maxDamage);

        let life = this.life;
        life += heal;
        life -= damage;

        this.life = Math.max(life, 0);
        this.life = Math.min(life, 100);

        return {
            heal,
            damage
        };
    }
}

class Monster extends Player {
    constructor(name) {
        super(name, 15);
    }
}

new Vue({
	el: '#app',
	data: {
        started: false,
        hero: null,
        monster: null,
        history: [],
	},
    created() {
	    this.resetGame();
    },
    computed: {
        endGame() {
            return this.hero.isDead() || this.monster.isDead();
        },
        heroWins() {
            return this.monster.isDead() && !this.hero.isDead();
        },
    },
    methods: {
        resetGame() {
            this.hero = new Hero("Jogador");
            this.monster = new Monster("Monstro");
            this.history = [];
            this.started = false;
        },
        newGame() {
            this.resetGame();
            this.started = true;
        },
        log(type, damage, player, otherPlayer) {
            this.history.unshift({
                type,
                damage,
                player,
                otherPlayer
            });
        },
	    attack(typeAttack = 'attack') {
	        const monsterTakeDamage = this.hero[typeAttack](this.monster);
            this.log('attack', monsterTakeDamage, this.hero, this.monster);

            if (!this.monster.isDead()) {
                const heroTakeDamage = this.monster.attack(this.hero);
                this.log('attack', heroTakeDamage, this.monster, this.hero);
            }
        },
        specialAttack() {
            this.attack('specialAttack');
        },
        heal() {
            const {heal, damage} = this.hero.heal();
            this.log('heal', heal, this.hero, this.monster);
            this.log('attack', damage, this.monster, this.hero);
        },
    }
});
