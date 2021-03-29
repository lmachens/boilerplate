import Head from "next/head";
import { useState } from "react";
import SearchInput from "../components/search-input/SearchInput";
import StudentList from "../components/student-list/StudentList";
import styles from "../styles/Home.module.css";
import { searchStudents, Student } from "../utils/api";

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
        <StudentList students={students} />
      </main>
    </div>
  );
}
