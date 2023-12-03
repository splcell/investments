import { memo } from "react";
import styles from './SearchTable.module.scss'
import { Link } from "react-router-dom";
import { SearchData } from "components/Search";

interface SearchTableProps {
  results: SearchData[];
  onClick: () => void;
  tableWidth?: number
}

export const SearchTable = memo(({results, onClick, tableWidth}: SearchTableProps) => {
  return(
    <table className={styles.searchTable} style={{width: `${tableWidth}px`}}>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Name</th>
          <th>Exchange</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {results.map(result => (
          <tr key={result.symbol} className={styles.searchTableRow} onClick={onClick}>
            <td><Link to={`/company/${result.symbol}`}>{result.symbol}</Link></td>
            <td><Link to={`/company/${result.symbol}`}>{result.name}</Link></td>
            <td><Link to={`/company/${result.symbol}`}>{result.exchangeShortName}</Link></td>
            <td className={styles.currency}><Link to={`/company/${result.symbol}`}>{result.currency}</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
})