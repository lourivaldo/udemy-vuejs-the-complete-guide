<template>
    <div class="user-dropdown">
        <div class="user-button">
            <span class="d-none d-sm-block">{{ user.name }}</span>
            <div class="user-dropdown-img">
                <Gravatar :email="user.email" alt="user"></Gravatar>
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content">
            <a href=""><i class="fa fa-cogs"></i> Administração</a>
            <a href=""><i class="fa fa-sign-out"></i> Sair</a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Gravatar from 'vue-gravatar'

export default {
    name: 'UserDropdown',
    components: { Gravatar },
    computed: {
        ...mapState(['user'])
    },
}
</script>

<style scoped>
.user-dropdown {
    position: relative;
    height: 100%;
}
.user-button {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;
    height: 100%;
    padding: 0 20px;
}

.user-dropdown:hover {
    background-color: rgba(0, 0, 0, 0.2);
}
.user-dropdown-img {
    margin: 0 10px;
}

.user-dropdown-img > img {
    max-height: 37px;
    border-radius: 5px;
}

.user-dropdown-content {
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 170px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
    visibility: visible;
    opacity: 1;
}

.user-dropdown-content a {
    text-decoration: none;
    color: #000;
    padding: 10px;
}
.user-dropdown-content a:hover {
    background-color: #ededed;
    text-decoration: none;
    color: #000;
}
</style>
