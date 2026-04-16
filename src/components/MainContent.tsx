<<<<<<< HEAD
import { memo } from "react";
import styles from "./MainContent.module.css";

=======
import styles from "./MainContent.module.css";
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
interface Column {
  id: string;
  title: string;
  tasks: string[];
}
interface MainContentProps {
  columns: Column[];
}
<<<<<<< HEAD

function MainContent({ columns }: MainContentProps) {
  console.log("MainContent re-render"); // pour observer
=======
export default function MainContent({ columns }: MainContentProps) {
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
  return (
    <main className={styles.main}>
      <div className={styles.board}>
        {columns.map((col) => (
<<<<<<< HEAD
          <div
            key={col.id}
            className={styles.column}
          >
=======
          <div key={col.id} className={styles.column}>
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
            <h3 className={styles.colTitle}>
              {col.title} ({col.tasks.length})
            </h3>
            {col.tasks.map((task, i) => (
<<<<<<< HEAD
              <div
                key={i}
                className={styles.card}
              >
=======
              <div key={i} className={styles.card}>
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
                {task}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
<<<<<<< HEAD

export default memo(MainContent);
=======
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
