import { ContentBox } from "components/ContentBox";
import { memo, useState } from "react";
import styles from './Income.module.scss'
import { SelectComponent } from "components/Select";
import Annual from "../Annual/Annual";
import Quarterly from "../Quarterly/Quarterly";

const Income = memo(() => {
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

export default Income