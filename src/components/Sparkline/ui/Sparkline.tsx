import { memo } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

interface SparklineProps {
  sparklineData: any[];
}

export const Sparkline = memo(({ sparklineData }: SparklineProps) => {
  if (typeof sparklineData[0] === "string") {
    sparklineData.shift();
  }

  return (
    <>
      {sparklineData.length > 0 ? (
        <Sparklines data={sparklineData}>
          <SparklinesLine color="black" />
        </Sparklines>
      ) : (
        "-"
      )}
    </>
  );
});
