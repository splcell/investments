import { memo, useState } from "react";
import styles from './CashFlow.module.scss'
import { ContentBox } from "components/ContentBox";
import { SelectComponent } from "components/Select";
import {Annual} from "../Annual/Annual";
import { Quarterly } from "components/Reports/Balance/Quarterly";

export const CashFlow = memo(() => {
  const [period, setPeriod] = useState('annual');

  return(
    <ContentBox>
      <SelectComponent setPeriod={setPeriod}/>
      <div className={styles.reportsBox}>
        {period === 'annual' ? <Annual /> : <Quarterly />}
      </div>
    </ContentBox>
  )
})
