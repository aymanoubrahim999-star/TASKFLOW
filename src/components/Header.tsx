import styles from "./Header.module.css";
<<<<<<< HEAD

=======
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
interface HeaderProps {
  title: string;
  onMenuClick: () => void;
  userName?: string;
  onLogout?: () => void;
}

export default function Header({
  title,
  onMenuClick,
  userName,
  onLogout,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
<<<<<<< HEAD
        <button
          className={styles.menuBtn}
          onClick={onMenuClick}
        >
          ☰
        </button>

        <h1 className={styles.logo}>{title}</h1>
      </div>

      <div className={styles.right}>
        {userName && <span className={styles.userName}>{userName}</span>}
        {onLogout && (
          <button
            className={styles.logoutBtn}
            onClick={onLogout}
          >
=======
        <button className={styles.menuBtn} onClick={onMenuClick}>
          ☰
        </button>
        <h1 className={styles.logo}>{title}</h1>
      </div>
      <div className={styles.right}>
        {userName && <span className={styles.userName}>{userName}</span>}
        {onLogout && (
          <button className={styles.logoutBtn} onClick={onLogout}>
>>>>>>> 2e296b65d6f47c48987d1137732f59b79820a846
            Déconnexion
          </button>
        )}
      </div>
    </header>
  );
}
