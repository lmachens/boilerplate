import React from "react";
import { Student } from "../../utils/api";

interface StudentListProps {
  students: Student[];
}
function StudentList({ students }: StudentListProps) {
  return (
    <ul>
      {students?.map((student) => (
        <li key={student._id}>
          {student.firstName} {student.lastName}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
