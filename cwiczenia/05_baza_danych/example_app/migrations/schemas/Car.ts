const carSchema = (table) => {
    table.increments('id').primary().unique()
    table.string('number_plate').notNullable().unique()
    table.string('description').notNullable()
    table.string('mileage').notNullable()
    table.string('alias')
    table.integer('employee_id').references('id').inTable('employee')
    table.timestamps(true, true)
}

module.exports = carSchema;
