import { memo } from "react";
import styles from "./TopsTable.module.scss";
import { Link } from "react-router-dom";
import { Gainer, IndexesInfo, SectorPerformance} from "components/Tops/model/types/tops";
import cn from "classnames";

interface TopsTableProps {
  topData?: Gainer[];
  sectorPerformance?: SectorPerformance[]
  indexes?: IndexesInfo[]
  sentiment?: "positive" | "negative";
}



export const TopsTable = memo(({ topData, sectorPerformance, indexes, sentiment }: TopsTableProps) => {

  if(topData !== undefined){
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
  } 

  if(sectorPerformance !== undefined){
    return (
      <table className={styles.topsTable}>
        <thead className={styles.topsTableThead}>
          <tr>
            <th>Sector</th>
            <th>Change%</th>
          </tr>
        </thead>
        <tbody>
          {sectorPerformance.map((sector) => (
            <tr key={sector.sector}>
              <td>{sector.sector}</td>
              <td className={cn({
                  [styles.positive]: sentiment === "positive" || Number(sector.changesPercentage.replace('%', '')) > 0,
                  [styles.negative]: sentiment === "negative" || Number(sector.changesPercentage.replace('%', '')) < 0,
                  [styles.cellPadding]: Number(sector.changesPercentage.replace('%', '')) >= 0
                })}>{Number(sector.changesPercentage.replace('%', '')).toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if(indexes !== undefined){
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
          {indexes.map((index) => (
            <tr key={index.symbol}>
              <td>{index.symbol}</td>
              <td>{Math.round(index.price).toLocaleString()}</td>
              <td
                className={cn({
                  [styles.positive]: sentiment === "positive" || index.change > 0,
                  [styles.negative]: sentiment === "negative" || index.change < 0,
                })}
              >
                {index.change.toFixed(1).toLocaleString()}
              </td>
              <td
                className={cn({
                  [styles.positive]: sentiment === "positive" || index.changesPercentage > 0,
                  [styles.negative]: sentiment === "negative" || index.changesPercentage < 0,
                })}
              >
                {index.changesPercentage.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

});
