import { ContentBox } from "components/ContentBox";
import { memo, useEffect, useState } from "react";
import Highcharts from "highcharts/highstock.src.js";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { getProfile } from "../../model/selectors/companyInfoSelectors";
import { ChartData } from "../model/types/chartData";
import { apiKey } from "App";
import { CheckDataHoc } from "components/CheckTopStatus/CheckDataHoc";
import styles from './CompanyChart.module.scss'


export const CompanyChart = memo(() => {
  const profile = useSelector(getProfile);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const options = {
    chart: {
      width: 1370,
      height: 400,
    },

    title: {
      text: `${profile?.companyName} Stock Price`,
    },

    subtitle: {},

    rangeSelector: {
      selected: 0,
    },

    xAxis: {
      min: null,
      max: null,
    },

    series: [
      {
        name: `${profile?.companyName} Stock Price`,
        data: chartData,
        type: "area",
        threshold: null,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],

    colors: ["#EFAF0A"],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              height: 300,
            },
            subtitle: {
              text: null,
            },
            navigator: {
              enabled: false,
            },
          },
        },
      ],
    },
  };

  useEffect(() => {
    const fetchingChartData = async (ticker: string) => {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?serietype=line&apikey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Chart Data not Found");
      }

      const data = await response.json();
      return data;
    };

    if (profile?.symbol) {
      setIsLoading(true)
      fetchingChartData(profile.symbol)
        .then((data) => {
          let historicalPrices: any[] = [];
          for (let i = 0; i < data.historical.length; i++) {
            if (data.historical[i].close > 0) {
              historicalPrices.unshift([
                new Date(data.historical[i].date).getTime(),
                data.historical[i].close,
              ]);
            }
          }

          setChartData(historicalPrices);
        })
        .catch((error: Error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }
  }, [profile]);

  return (
    <CheckDataHoc isLoading={isLoading} error={error} className={styles.loadingBox} boxHeight={430}>
      <ContentBox>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"stockChart"}
      />
    </ContentBox>
    </CheckDataHoc>
    
  );
});
