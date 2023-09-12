import { LunarCard } from "../cards/Lunar/lunarCard";
import styles from "./main.module.scss";
import { Survey } from "../survey/survey";
import { Home } from "../home/home";

export const Main = () => {
  return (
    <div className={styles.container}>
        <Home/>
      <div className={styles.content}>
        <div className={styles.cards}>
          <LunarCard />
          <LunarCard />
          <LunarCard />
          <LunarCard />
        </div>
        <Survey />
      </div>
    </div>
  );
};
