import "./modal.css";
import React from "react";

export const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="info">
          <div className="free">БЕСПЛАТНО</div>
          <div className="expert">Консультация эксперта</div>
          <div className="help">
            Помогаем подобрать квартиру от застройщика в новостройках Москвы и
            Подмосковья.
          </div>
          <div className="time">
          В рабочие дни с 9:00 до 21:00.
          </div>
        </div>
        <div className="inputs">
          <div className="form">
            <div href="+79777777777"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
