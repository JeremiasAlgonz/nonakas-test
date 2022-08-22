import styles from "./Picture.module.css";

import background from "../../assets/img/baskets-bg.jpg";

const Picture = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img className={styles.bg} src={background} alt="background" />
      </picture>
      <h2 className={styles.header}>Faça o dia de</h2>
      <h1 className={styles.header2}>alguém</h1>
      <h1 className={styles.header3}>especial</h1>
    </article>
  );
};

export default Picture;