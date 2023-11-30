import { ContentBox } from 'components/ContentBox';
import { Text } from 'components/Text';
import { memo } from "react";
import { IndexesInfo } from '../model/types/tops';
import { TopsTable } from '../TopsTable/ui/TopsTable';

const indexes = [ {
  "symbol" : "^DJI",
  "name" : "Dow Jones Industrial Average",
  "price" : 32845.13000000,
  "changesPercentage" : 0.96997600,
  "change" : 315.52930000,
  "dayLow" : 32493.02000000,
  "dayHigh" : 32910.18000000,
  "yearHigh" : 36952.65000000,
  "yearLow" : 29653.29000000,
  "marketCap" : null,
  "priceAvg50" : 31597.23800000,
  "priceAvg200" : 34025.71500000,
  "volume" : 490272653,
  "avgVolume" : 415056935,
  "exchange" : "INDEX",
  "open" : 32515.62000000,
  "previousClose" : 32529.60000000,
  "eps" : null,
  "pe" : null,
  "earningsAnnouncement" : null,
  "sharesOutstanding" : null,
  "timestamp" : 1659314554
}, {
  "symbol" : "^GSPC",
  "name" : "S&P 500",
  "price" : 4130.29000000,
  "changesPercentage" : 1.42077600,
  "change" : 57.86010700,
  "dayLow" : 4079.22000000,
  "dayHigh" : 4140.15000000,
  "yearHigh" : 4818.62000000,
  "yearLow" : 3636.87000000,
  "marketCap" : null,
  "priceAvg50" : 3921.60990000,
  "priceAvg200" : 4346.05130000,
  "volume" : 2894154000,
  "avgVolume" : 3884030161,
  "exchange" : "INDEX",
  "open" : 4087.33000000,
  "previousClose" : 4072.43000000,
  "eps" : null,
  "pe" : null,
  "earningsAnnouncement" : null,
  "sharesOutstanding" : null,
  "timestamp" : 1659314554
}, {
  "symbol" : "^IXIC",
  "name" : "NASDAQ Composite",
  "price" : 12390.68750000,
  "changesPercentage" : 1.87532190,
  "change" : 228.08789000,
  "dayLow" : 12181.13000000,
  "dayHigh" : 12426.26400000,
  "yearHigh" : 16212.23000000,
  "yearLow" : 10565.14000000,
  "marketCap" : null,
  "priceAvg50" : 11531.97700000,
  "priceAvg200" : 13628.31300000,
  "volume" : 4309335000,
  "avgVolume" : 5127609193,
  "exchange" : "INDEX",
  "open" : 12239.70000000,
  "previousClose" : 12162.59300000,
  "eps" : null,
  "pe" : null,
  "earningsAnnouncement" : null,
  "sharesOutstanding" : null,
  "timestamp" : 1659314554
} ]

let indexesTest: IndexesInfo[] = []

indexes.forEach(index => {
  indexesTest.push({
    symbol: index.symbol,
    name: index.name,
    change: index.change,
    changesPercentage: index.changesPercentage,
    price: index.price
  })
})

export const TopIndexes = memo(() => {
  return(
    <ContentBox>
      <Text title="Market Indexes" bordered align="center" size={18}/>
      <TopsTable indexes={indexesTest}/>
    </ContentBox>
  )
})