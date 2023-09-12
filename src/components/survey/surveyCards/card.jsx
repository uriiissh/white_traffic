import styles from "./card.module.scss";

import React from "react";
import classNames from "classnames";

import { Checkbox } from "./checkbox";

export const CardSurvey = ({ title, subtitle, array, counter, count }) => {
  return (
    <div className={styles.card}>
      <div className={styles.survey}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className={styles.checkboxes}>
          {array.map((element, index) => (
            <Checkbox key={index} text={element} />
          ))}
        </div>
        <div className={styles.btns}>
          <button
            className={classNames(
              styles.btn,
              count === 0 && styles.btnback_active
            )}
            count={count}
            onClick={() => counter()}
          >
            Назад
          </button>
          <button className={styles.btn} onClick={() => counter("plus")}>
            Следующий вопрос
          </button>
        </div>
      </div>
      <div className={styles.call}></div>
    </div>
  );
};
