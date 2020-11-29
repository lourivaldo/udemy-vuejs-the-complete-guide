module.exports = app => {
   app.route('/users')
       .post(app.api.user.save)
       .get(app.api.user.all);

   app.route('/users/:id')
       .put(app.api.user.save)
       .get(app.api.user.get);
}
