import { memo } from "react";
import styles from "./MainPage.module.scss";
import { GlobalNewsComponent, SentimentNewsComponent } from "components/News";
import { MostActive, Performance, TopGainers, TopIndexes, TopLoosers } from "components/Tops";

export const key = process.env.API_KEY

const MainPage = memo(() => {
  console.log(key)
  return (
    <div className="big-container">
      <div className={styles.inner}>
        <div className={styles.leftWrapper}>
          <MostActive />
          <TopGainers />
          <TopLoosers />
        </div>
        <div className={styles.middleWrapper}>
          <GlobalNewsComponent />
          <SentimentNewsComponent />
        </div>
        <div className={styles.rightWrapper}>
          <TopIndexes />
          <Performance />
        </div>
      </div>
    </div>
  );
});

export default MainPage;
