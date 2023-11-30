import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { memo } from "react";
import { TopsTable } from "../TopsTable/ui/TopsTable";
import { SectorPerformance } from "../model/types/tops";

const performanceTest: SectorPerformance[] = [
  {
    sector: "Basic Materials",
    changesPercentage: "0.0546%",
  },
  {
    sector: "Communication Services",
    changesPercentage: "-0.1645%",
  },
  {
    sector: "Conglomerates",
    changesPercentage: "0.0000%",
  },
  {
    sector: "Consumer Cyclical",
    changesPercentage: "-0.0018%",
  },
  {
    sector: "Consumer Defensive",
    changesPercentage: "-0.1199%",
  },
  {
    sector: "Energy",
    changesPercentage: "-0.6984%",
  },
  {
    sector: "Financial",
    changesPercentage: "0.1233%",
  },
  {
    sector: "Financial Services",
    changesPercentage: "-0.0211%",
  },
  {
    sector: "Healthcare",
    changesPercentage: "-0.1698%",
  },
  {
    sector: "Industrial Goods",
    changesPercentage: "2.2278%",
  },
  {
    sector: "Industrials",
    changesPercentage: "-0.1186%",
  },
  {
    sector: "Real Estate",
    changesPercentage: "0.1093%",
  },
  {
    sector: "Services",
    changesPercentage: "0.0000%",
  },
  {
    sector: "Technology",
    changesPercentage: "0.1022%",
  },
  {
    sector: "Utilities",
    changesPercentage: "0.4557%",
  },
];

export const Performance = memo(() => {
  return (
    <ContentBox>
      <Text title="Sector Performance" bordered align="center" size={18}/>
      <TopsTable sectorPerformance={performanceTest}/>
    </ContentBox>
  );
});
