import { memo } from "react";
import styles from "./TopsTable.module.scss";
import { Link } from "react-router-dom";
import { Gainer } from "components/Tops/model/types/tops";
import cn from "classnames";

interface TopsTableProps {
  topData: Gainer[];
  sentiment?: "positive" | "negative";
}

export const TopsTable = memo(({ topData, sentiment }: TopsTableProps) => {
  return (
    <table className={styles.topsTable}>
      <thead className={styles.topsTableThead}>
        <tr>
          <th>Ticker</th>
          <th>Price</th>
          <th>Change</th>
          <th>Change%</th>
        </tr>
      </thead>
      <tbody>
        {topData.map((top) => (
          <tr key={top.symbol}>
            <td>{<Link to={`/company/${top.symbol}`}>{top.symbol}</Link>}</td>
            <td>{top.price}</td>
            <td
              className={cn({
                [styles.positive]: sentiment === "positive" || top.change > 0,
                [styles.negative]: sentiment === "negative" || top.change < 0,
              })}
            >
              {top.change}
            </td>
            <td
              className={cn({
                [styles.positive]: sentiment === "positive" || top.changesPercentage > 0,
                [styles.negative]: sentiment === "negative" || top.changesPercentage < 0,
              })}
            >
              {top.changesPercentage.toFixed(1)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
