import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainimg}>
          <div className={styles.maintext}>
            Единая база проверенных новостроек Москвы и Подмосковья
          </div>
        </div>
      </div>
    </div>
  );
};
