import { memo } from "react";
import styles from "./MainPage.module.scss";
import { GlobalNewsComponent, SentimentNewsComponent } from "components/News";
import { MostActive, TopGainers } from "components/Tops";
import { TopLoosers } from "components/Tops/TopLoosers/ui/TopLoosers";
export const key = process.env.API_KEY

const MainPage = memo(() => {
  console.log(key)
  return (
    <div className="container">
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
        <div className={styles.rightWrapper}></div>
      </div>
    </div>
  );
});

export default MainPage;
