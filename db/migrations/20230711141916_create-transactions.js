"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary();
        table.text('title').notNullable(); // NAO PODE FICAR VAZIO
        table.decimal('amount', 10, 2).notNullable(); // NAO PODE FICAR VAZIO
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable(); // NAO PODE FICAR VAZIO
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable('transactions');
}
exports.down = down;
