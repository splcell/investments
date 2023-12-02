import { memo } from "react";
import styles from './Footer.module.scss'

export const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.copyright}>&copy; Copyright 2023 splcell</span>
      </div>
    </footer>
  )
})