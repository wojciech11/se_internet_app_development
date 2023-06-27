import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('employee', require('./schemas/Employee'))
        .createTable('car', require('./schemas/Car'))
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('car').dropTableIfExists('employee')
}
