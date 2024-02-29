import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import styles from "styles/Layout.module.scss";
import sidebar_style from "styles/Sidebar.module.scss";

export default function Layout({ children }) {
  const [open_sidebar, setOpenSidebar] = useState(true);
  return (
    // Set container width to 80% of the screen
    <>
      <div className={sidebar_style.toggleButton}>
        <button type="button" onClick={() => setOpenSidebar(true)}>Open Sidebar</button>
      </div>
      <Sidebar
        open={true}
        categories={[]}
        handleClose={() => setOpenSidebar(false)}
        onSelection={() => setOpenSidebar(false)}
      />
      <main className={styles.mainLayout + " container"}>{children}</main>
    </>
  );
}
