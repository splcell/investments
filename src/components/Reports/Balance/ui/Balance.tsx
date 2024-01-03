import { ContentBox } from "components/ContentBox";
import { SelectComponent } from "components/Select";
import { memo, useState } from "react";
import { Annual } from "../Annual";
import { Quarterly } from "../Quarterly";
import styles from './Balance.module.scss'

const Balance = memo(() => {
  const [period, setPeriod] = useState('annual')


  return(
    <ContentBox>
      <SelectComponent setPeriod={setPeriod}/>
      <div className={styles.reportsBox}>
        {period === 'annual' ? <Annual /> : <Quarterly />}
      </div>
    </ContentBox>
  )
})

export default Balance