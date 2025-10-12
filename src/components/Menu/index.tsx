import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
export function Menu() {
  return (
    <div className={styles.menuDiv}>
      <a href='#' className={`${styles.iconRound} ${styles.activate}`}>
        <HomeIcon />
      </a>
      <a href='#' className={styles.iconRound}>
        <HistoryIcon />
      </a>
      <a href='#' className={styles.iconRound}>
        <SettingsIcon />
      </a>
      <a href='#' className={styles.iconRound}>
        <SunIcon />
      </a>
    </div>
  );
}
