const bcrypt = require('bcrypt-nodejs');

module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    const save = async (req, res) => {
        const user = { ...req.body };
        if (req.params.id) user.id = req.params.id;

        try {
            existsOrError(user.name, 'Nome não informado');
            existsOrError(user.email, 'Email não informado');
            existsOrError(user.password, 'Senha não informado');
            existsOrError(user.confirmPassword, 'Confirmação de Senha invalida');
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem');

            const userFromDB = await app.db('users')
                .where({ email: user.email })
                .first();
            if (!user.id) {
                notExistsOrError(userFromDB, 'Usuario ja cadastrado')
            }
        } catch (e) {
            return  res.status(400).send(e)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id) {
          app.db('users')
              .update(user)
              .where({ id: user.id })
              .whereNull('deletedAt')
              .then(_ => res.status(204).send())
              .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    };

    const all = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    };

    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({ id: req.params.id })
            .whereNull('deletedAt')
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    };

    const remove = async (req, res) => {
        try {
            const articles = await app.db('articles')
                .where({ userId: req.params.id });
            notExistsOrError(articles, 'Usuario possui artigos');

            const rowsUpdated = await app.db('users')
                .update({deletedAt: new Date()})
                .whereNull('deletedAt')
                .where({ id: req.params.id });
            existsOrError(rowsUpdated, 'Usuario não foi encontrado');

            res.status(204).send()
        } catch (e) {
            res.status(204).send(e)
        }
    };

    return { save, all, get, remove }
};
