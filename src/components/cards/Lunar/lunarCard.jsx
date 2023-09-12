import styles from "./lunarCard.module.scss";
import lunar from "../../assets/images/lunar.webp";
import { Modal } from "../../Modal/modal";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const LunarCard = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.card}>
      <img src={lunar} alt="" />
      <div className={styles.cardcontent}>
        <Link className={styles.link} to="/detail">
          <h1 className={styles.cardtitle}>ЖК "Lunar"</h1>
        </Link>
        <div className={styles.placelist}>
          <ul className={styles.coords}>
            <li className={styles.coordslist}>Москва</li>
            <li className={styles.coordslist}>ЗАО</li>
            <li className={styles.coordslist}>Гагаринский</li>
            <li className={styles.metro}>
              <div className={styles.transicon}>
                <span className={styles.circle}></span>
              </div>
              Ленинский проспект
            </li>
          </ul>
        </div>
        <div className={styles.prices}>
          <div className={styles.price}>
            <div className={styles.flat}>
              Студия от 22.90м<sup>2</sup>
            </div>
            <div className={styles.money}>15 468 721₽</div>
          </div>
          <div className={styles.price}>
            <div className={styles.flat}>
              1-комн. от 40.00м<sup>2</sup>
            </div>
            <div className={styles.money}>20 671 240₽</div>
          </div>
          <div className={styles.price}>
            <div className={styles.flat}>
              2-комн. от 60.60м<sup>2</sup>
            </div>
            <div className={styles.money}>28 920 864₽</div>
          </div>
          <div className={styles.price}>
            <div className={styles.flat}>
              3-комн. от 82.30м<sup>2</sup>
            </div>
            <div className={styles.money}>38 145 227₽</div>
          </div>
          <div className={styles.price}>
            <div className={styles.flat}>
              4-комн. от 107.90м<sup>2</sup>
            </div>
            <div className={styles.money}>51 497 850₽</div>
          </div>
        </div>
      </div>
      <button className={styles.cardbtn} onClick={() => setModalActive(true)}>
        Оставить заявку
      </button>
      <Modal active={modalActive} setActive={setModalActive}></Modal>
    </div>
  );
};
