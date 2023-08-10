import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable() // NAO PODE FICAR VAZIO
    table.decimal('amount', 10, 2).notNullable() // NAO PODE FICAR VAZIO
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable() // NAO PODE FICAR VAZIO
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
