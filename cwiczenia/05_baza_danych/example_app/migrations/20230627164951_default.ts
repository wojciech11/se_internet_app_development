import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable('employee', table => {
          table.increments('id').primary().unique()
          table.string('employee_number').notNullable().unique()
          table.string('first_name').notNullable()
          table.string('surname').notNullable()
          table.timestamps(true, true)
    })

     await knex.schema.createTable('car', table => {
           table.increments('id').primary().unique()
           table.string('number_plate').notNullable().unique()
           table.string('description').notNullable()
           table.string('mileage').notNullable()
           table.string('alias')
           table.integer('employee_id').references('id').inTable('employee')
           table.timestamps(true, true)
     }
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('car').dropTableIfExists('employee')
}
