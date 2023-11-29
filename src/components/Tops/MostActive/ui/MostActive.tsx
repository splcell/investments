import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { Active, TopsTable } from "components/Tops";
import { memo } from "react";

const testActive: Active[] = [
	{
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

  {
		"symbol": "MU",
		"name": "Micron Technology, Inc.",
		"change": 2.24,
		"price": 53.96,
		"changesPercentage": 4.331
	},

]

export const MostActive = memo(() => {
  return (
    <ContentBox>
      <Text title="Most Active" bordered align="center" size={18}/>
      <TopsTable topData={testActive}/>
    </ContentBox>
  )
})