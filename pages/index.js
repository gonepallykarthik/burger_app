import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1> Welcome to Nextjs</h1>
      <a href="/builder">
        {" "}
        Go to <code>page</code> Builder{" "}
      </a>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quam
        quisquam animi sapiente ducimus consequatur, molestiae exercitationem
        aperiam consequuntur, omnis expedita beatae qui fugit veniam cumque
        voluptatem facere. Atque, consequuntur.
      </p>
    </div>
  );
}
