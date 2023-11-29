import { ContentBox } from "components/ContentBox";
import { Text } from "components/Text";
import { Gainer } from "components/Tops";
import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./TopGainers.module.scss";
import Table from "react-bootstrap/Table";
import { TopsTable } from "components/Tops/TopsTable/ui/TopsTable";

const testGainers: Gainer[] = [
  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },

  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },

  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },

  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },

  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },

  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },

  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },

  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },

  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },

  {
    symbol: "PIK",
    name: "Kidpik Corp.",
    change: 0.27,
    price: 1.8,
    changesPercentage: 17.6471,
  },
];

export const TopGainers = memo(() => {
  const [gainers, setGainers] = useState<Gainer[]>([]);

  return (
    <ContentBox className={styles.gainers}>
      <Text
        title="Top Gainers"
        bordered
        align="center"
        size={18}
      />
      <TopsTable topData={testGainers} sentiment="positive" />
    </ContentBox>
  );
});
