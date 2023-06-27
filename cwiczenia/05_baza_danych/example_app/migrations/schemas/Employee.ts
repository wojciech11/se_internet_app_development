const employeeSchema = (table) => {
    table.increments('id').primary().unique()
    table.string('employee_number').notNullable().unique()
    table.string('first_name').notNullable()
    table.string('surname').notNullable()
    table.timestamps(true, true)
}

module.exports = employeeSchema;
