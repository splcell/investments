import { memo } from "react";
import styles from './Header.module.scss'
import { Link } from "react-router-dom";
import { Search } from "components/Search";

export const Header = memo(() => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link to={'/'} className={styles.headerLink}>Investments</Link>
          <Search />
        </div>
      </div>
    </header>
  )
})