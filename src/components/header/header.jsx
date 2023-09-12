import styles from "./header.module.scss";
import novostroym from "./images/novostroym.svg";
import React, { useState } from "react";
import { Modal } from "../Modal/modal";
import { Link, useParams } from "react-router-dom";
import phone from "./images/phone.svg";

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to="/catalog">
          <img src={novostroym} alt="" />
        </Link>
        <div className={styles.nav}>
          <button className={styles.navbutton}>Новостройки</button>

          <button className={styles.navbutton}>Ритейл</button>
          <button className={styles.navbutton}>Офисы</button>
          <button className={styles.navbutton}>Квартиры</button>
          <button
            className={styles.navbutton}
            onClick={() => setModalActive(true)}
          >
            Консультация
          </button>
        </div>
        <button className={styles.btn}>Заказать звонок</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>йоу</p>
      </Modal>
    </div>
  );
};
