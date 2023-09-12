import React, { useState } from "react";
import styles from './card.module.scss';
import check from "../../assets/images/check.svg";
import classNames from "classnames";

export const Checkbox = ({ text }) => {
  const [checkActive, setCheckActive] = useState(false);

  return (
    <div className={styles.checkbox}>
      <div
        className={classNames(styles.check, checkActive && styles.check_active)}
        onClick={() => setCheckActive((prev) => !prev)}
      >
        <img src={check} alt="" />
      </div>
      {text}
    </div>
  );
};
