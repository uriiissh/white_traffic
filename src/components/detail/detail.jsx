import styles from "./detail.module.scss";
import { Modal } from "../Modal/modal";
import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const Detail = () => {
  const [modalActive, setModalActive] = useState(false);

  const defaultState = {
    center: [55.704288, 37.571812],
    zoom: 15,
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.textinfo}>
            <div className={styles.name}>ЖК «Lunar»</div>
            <div className={styles.place}>Москва, ЮЗАО, Гагаринский</div>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.up}>
            <div className={styles.left}>
              <h1>Расположение</h1>
              <div className={styles.places}>
                <div className={styles.placeinfo}>
                  <div>Регион</div>
                  <div>Москва</div>
                </div>
                <div className={styles.placeinfo}>
                  <div>Округ</div>
                  <div>ЮЗАО</div>
                </div>
                <div className={styles.placeinfo}>
                  <div>Район</div>
                  <div>Гагаринский</div>
                </div>
                <div className={styles.placeinfo}>
                  <div>Метро</div>
                  <div>Ленинский проспект</div>
                </div>
                <div className={styles.placeinfo}>
                  <div>Станция МЦК</div>
                  <div>Площадь гагарина</div>
                </div>
                <div className={styles.placeinfo}>
                  <div>Адрес</div>
                  <div>Ленинский пр-т, 38</div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.callback}>
                <h1>Отдел продаж</h1>
                <div className={styles.call}>
                  Нужна помощь? Закажите обратный звонок или позвоните нам!
                  <div className={styles.num} href="+79777777777">
                    +7(977) 777-77-77
                  </div>
                </div>
              </div>
              <button
                className={styles.cardbtn}
                onClick={() => setModalActive(true)}
              >
                Оставить заявку
              </button>
              <Modal active={modalActive} setActive={setModalActive}>
                <p>Нужна помощь? Закажите обратный звонок или позвоните нам!</p>
              </Modal>
            </div>
          </div>
          <div className={styles.description}>
            <h1>Подробное описание</h1>
            <div className={styles.text}>
              МФК Lunar – современный проект премиум-класса от компании Hutton
              Development, который расположен в Гагаринском районе и
              спроектирован бюро «Цимайло Ляшенко и Партнеры». В шаговой
              доступности находится станция метро «Ленинский проспект» и станция
              «Площадь Гагарина». Многофункциональный комплекс состоит из трех
              корпусов - Модуль А, В и C, которые связаны закрытой
              благоустроенной территорией. При этом каждый модуль с оригинальным
              фасадом. Модуль А – корпус с апартаментами с отделкой white box,
              модуль B — комфортный и современный бизнес-центр, MODULE С –
              здание с апартаментами с отделкой по дизайну бюро Arch(e)type. На
              первых этажах зданий расположатся магазины и рестораны. Для
              комфорта автовладельцев предусмотрен подземный паркинг
              вместимостью 381 машиноместо. В МФК с жилыми секциями высотой 17
              этажей запланировано 330 апартаментов с отделкой под чистовую.
              Площадь лотов варьируется от 31 до 223 кв.м. На верхних этажах
              представлены лоты с каминами и террасами. В торцевых апартаментам
              предусмотрены лоджии. Продуманные планировочные решения каждого
              жилого помещения позволяют максимально эффективно использовать
              пространство.
            </div>
          </div>
          <YMaps>
            <Map width="100%" height="50vh" defaultState={defaultState}>
              <Placemark geometry={[55.704288, 37.571812]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};
