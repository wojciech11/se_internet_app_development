import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("employee").del();

  // Inserts seed entries
  await knex("employee").insert([
    {
      id: 1,
      employee_number: "D7992",
      first_name: "Natalia",
      surname: "Kowalska",
    },
    { id: 2, employee_number: "D7991", first_name: "Weronika", surname: "Kot" },
    { id: 3, employee_number: "D7990", first_name: "Tomasz", surname: "Kowal" },
  ]);
}
