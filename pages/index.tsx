import Head from "next/head";
import { useState } from "react";
import SearchInput from "../components/search-input/SearchInput";
import styles from "../styles/Home.module.css";
import { searchStudents } from "../utils/api";

interface Student {
  _id: string;
  firstName: string;
  lastName: string;
}

export default function Home() {
  const [students, setStudents] = useState<Student[]>(null);

  async function handleSearch(search: string) {
    const newStudents = await searchStudents(search);
    setStudents(newStudents);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchInput onSearch={handleSearch} />
        <ul>
          {students?.map((student) => (
            <li key={student._id}>
              {student.firstName} {student.lastName}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
