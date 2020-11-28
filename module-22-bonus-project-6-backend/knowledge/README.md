# knowledge

```
docker exec -it cod3r_postgresql bash
psql -U postgres -d app
\d

knex init
knex migrate:make create_table_users
knex migrate:make create_table_categories
knex migrate:make create_table_articles
knex migrate:latest
knex migrate:rollback
knex migrate:latest
```
