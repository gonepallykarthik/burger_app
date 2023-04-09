import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" style={{ fontSize: "50px", color: "black" }}>
        Burger
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/builder">Builder</Link>
          </li>
          <li>
            <Link href="/orders">My orders</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
