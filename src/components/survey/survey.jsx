import React, { useState } from "react";
import { CardSurvey } from "./surveyCards/card";
import { cardArrayOne, cardArrayTwo, cardArrayThree, cardArrayFour, cardArrayFive} from "./surveyCards/card.data";

export const Survey = () => {
  const [count, setCount] = useState(0);

  function handleCount(value) {
    if(value === "plus"){setCount(count + 1);}
    else{setCount(count - 1)}
  }


  return (
    <div>
      {count === 0 && (
        <div>
          <CardSurvey
            title="Где присматриваете квартиру?"
            subtitle="ВОПРОС 1 ИЗ 5"
            array={cardArrayOne}
            counter={handleCount}
            count={count}
          />
        </div>
      )}
      {count === 1 && (
        <div>
          <CardSurvey
            title="Сколько комнат должно быть в квартире?"
            subtitle="ВОПРОС 2 ИЗ 5"
            array={cardArrayTwo}
            counter={handleCount}
          />
        </div>
      )}
      {count === 2 && (
        <div>
          <CardSurvey
            title="Насколько важна близость метро??"
            subtitle="ВОПРОС 3 ИЗ 5"
            array={cardArrayThree}
            counter={handleCount}
          />
        </div>
      )}
      {count === 3 && (
        <div>
          <CardSurvey
            title="Хотите заехать сразу или готовы подождать?"
            subtitle="ВОПРОС 4 ИЗ 5"
            array={cardArrayFour}
            counter={handleCount}

          />
        </div>
      )}
      {count === 4 && (
        <div>
          <CardSurvey
            title="На какой бюджет вы рассчитываете?"
            subtitle="ВОПРОС 5 ИЗ 5"
            array={cardArrayFive}
            counter={handleCount}
          />
        </div>
      )}
    </div>
  );
};
