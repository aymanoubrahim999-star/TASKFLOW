<<<<<<< HEAD
import { memo } from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

=======
import styles from "./Sidebar.module.css";
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
interface Project {
  id: string;
  name: string;
  color: string;
}
<<<<<<< HEAD

=======
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
interface SidebarProps {
  projects: Project[];
  isOpen: boolean;
}
<<<<<<< HEAD

function Sidebar({ projects, isOpen }: SidebarProps) {
  console.log("Sidebar re-render"); // pour observer
=======
export default function Sidebar({ projects, isOpen }: SidebarProps) {
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <h2 className={styles.title}>Mes Projets</h2>
      <ul className={styles.list}>
        {projects.map((p) => (
<<<<<<< HEAD
          <li key={p.id}>
            <NavLink
              to={`/projects/${p.id}`}
              className={({ isActive }) =>
                `${styles.item} ${isActive ? styles.active : ""}`
              }
            >
              <span
                className={styles.dot}
                style={{ background: p.color }}
              />
              {p.name}
            </NavLink>
=======
          <li key={p.id} className={styles.item}>
            <span className={styles.dot} style={{ background: p.color }} />
            {p.name}
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
          </li>
        ))}
      </ul>
    </aside>
  );
}
<<<<<<< HEAD

export default memo(Sidebar);
=======
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
