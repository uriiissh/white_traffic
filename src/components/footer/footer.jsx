import styles from "./footer.module.scss"

export const Footer = () => {
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.left}>
          <div>КОЙНОВ АЛЕКСЕЙ СЕРГЕЕВИЧ</div>
          <div>ИНН:505006558570</div>
          <div>ОГРНИП:311505003200106</div>
          <div>Московская область, город Щёлково</div>
          </div>
          <div className={styles.right}><a href="+79777777777">+7(977) 777-77-77</a></div>
        </div>
      </div>
    </div>
  )
}