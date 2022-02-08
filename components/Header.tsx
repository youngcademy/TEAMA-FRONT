import React, { Dispatch, SetStateAction } from "react";
import styles from "../styles/Header.module.scss";

interface IMenuOpen {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function Header({ menuOpen, setMenuOpen }: IMenuOpen) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header_left}>
        {menuOpen ? (
          <svg
            onClick={() => setMenuOpen(!menuOpen)}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="MenuOpenIcon"
          >
            <path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"></path>
          </svg>
        ) : (
          <svg
            onClick={() => setMenuOpen(!menuOpen)}
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        )}
        <h6>LOGO</h6>
      </div>
      <div className={styles.header_right}>
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          data-testid="Notification"
        >
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path>
        </svg>
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Header;
