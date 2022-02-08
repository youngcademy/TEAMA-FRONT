import Header from "./Header";
import SideBar from "./SideBar";
import styles from "../styles/Layout.module.scss";
import { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={styles.wrapper}>
        <SideBar menuOpen={menuOpen} />
        {children}
      </div>
    </>
  );
}

export default Layout;
