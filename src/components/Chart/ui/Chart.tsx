import { memo } from "react";
import Highcharts from "highcharts/highstock.src.js";
import HighchartsReact from "highcharts-react-official";

interface ChartProps {
  chartData: any[];
  text: string;
  type?: string;
  color?: string[];
  width?: number;
  height?: number;
  rangeSelectorStatus?: boolean;
  navigatorStatus?: boolean;
  scrollBarStatus?: boolean;
  pointWidth?: number
}

export const Chart = memo(
  ({
    chartData,
    text,
    type = "area",
    color = ["#EFAF0A"],
    width = 1370,
    height = 400,
    rangeSelectorStatus = true,
    navigatorStatus = true,
    scrollBarStatus = true,
    pointWidth
  }: ChartProps) => {


    const options = {
      chart: {
        width: width,
        height: height,
      },

      title: {
        text: "",
      },

      subtitle: {},

      plotOptions: {
        series: {
           pointWidth: pointWidth
        }
     },

      rangeSelector: {
        selected: 0,
        enabled: rangeSelectorStatus,
      },

      xAxis: {
        min: null,
        max: null,
      },

      yAxis: {
        tickInterval: 0.01,
        labels: {
          format: '{value:.2f}'
        }
     },

      series: [
        {
          name: `${text}`,
          data: chartData,
          type: type,
          threshold: null,
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],

      colors: color,

      navigator: {
        enabled: navigatorStatus,
      },

      scrollbar: {
        enabled: scrollBarStatus,
      },

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

    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"stockChart"}
      />
    );
  }
);
