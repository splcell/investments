import { memo, useCallback } from "react";
import styles from './SearchTable.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { SearchData } from "components/Search";

interface SearchTableProps {
  results: SearchData[];
  onClick: () => void;
  tableWidth?: number
}

export const SearchTable = memo(({results, onClick, tableWidth}: SearchTableProps) => {
  const navigate = useNavigate()

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
            <td onClick={() => navigate(`/company/${result.symbol}`)}>{result.symbol}</td>
            <td onClick={() => navigate(`/company/${result.symbol}`)}>{result.name}</td>
            <td onClick={() => navigate(`/company/${result.symbol}`)}>{result.exchangeShortName}</td>
            <td className={styles.currency} onClick={() => navigate(`/company/${result.symbol}`)}>{result.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
})