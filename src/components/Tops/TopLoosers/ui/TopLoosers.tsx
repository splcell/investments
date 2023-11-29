import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { Looser } from "components/Tops";
import { TopsTable } from "components/Tops/TopsTable/ui/TopsTable";
import { memo, useState } from "react";

const testLoosers: Looser[] = [
  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },

  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },

  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },

  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },

  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },

  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },

  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },

  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },

  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },

  {
    symbol: "DSLVF",
    name: "VelocityShares 3x Inverse Silver ETN Linked to the S&P GSCI Silver Index ER",
    change: -0.13,
    price: 1.13,
    changesPercentage: -10.3175,
  },
];

export const TopLoosers = memo(() => {
  const [loosers, setLoosers] = useState<Looser[]>([])


  return (
    <ContentBox>
      <Text title="Top Loosers" bordered align="center" size={18}/>
      <TopsTable topData={testLoosers} sentiment="negative" />
    </ContentBox>
  );
});
