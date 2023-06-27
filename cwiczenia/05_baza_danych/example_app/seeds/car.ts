import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("car").del();

  // Inserts seed entries
  await knex("car").insert([
    {
      id: 1,
      number_plate: "DW888",
      description: "",
      mileage: 10,
      alias: "",
      employee_id: 1,
    },
    {
      id: 2,
      number_plate: "DW777",
      description: "",
      mileage: 12,
      alias: "",
      employee_id: 2,
    },
    {
      id: 3,
      number_plate: "DW444",
      description: "",
      mileage: 15,
      alias: "",
      employee_id: 3,
    },
  ]);
}
