import { collection } from "./db";

interface Student {
  firstName: string;
  lastName: string;
}

export async function findStudents(): Promise<Student[]> {
  const cursor = await collection<Student>("students").find();
  const students = await cursor.toArray();
  return students;
}
