import styles from "./Layout.module.css";
import Header from "../Header";

function Layout(props) {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </>
  );
}

export default Layout;
