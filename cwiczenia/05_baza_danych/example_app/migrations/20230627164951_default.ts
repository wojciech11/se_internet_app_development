import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('employees', require('./schemas/Employees'))
        .createTable('cars', require('./schemas/Cars'))
}


export async function down(knex: Knex): Promise<void> {
}
