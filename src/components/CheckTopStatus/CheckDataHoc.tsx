import { ReactNode } from "react";
import { CheckDataStatus } from "./ui/CheckDataStatus";

interface CheckDataHocProps {
  children: ReactNode;
  isLoading: boolean;
  error?: string;
  title?: string;
  align?: "left" | "center";
  boxWidth?: number;
  boxHeight?: number;
  className?: string;
  marginTop?: number;
}

export const CheckDataHoc = ({
  children,
  isLoading,
  error,
  title = "",
  align = "left",
  boxWidth,
  boxHeight,
  className,
  marginTop,
}: CheckDataHocProps) => {
  if (isLoading) {
    return (
      <CheckDataStatus
        isLoading={isLoading}
        title={title}
        boxWidth={boxWidth}
        boxHeight={boxHeight}
        align={align}
        className={className}
      />
    );
  }

  if (error) {
    return (
      <CheckDataStatus
        error={error}
        title={title}
        boxWidth={boxWidth}
        boxHeight={boxHeight}
        align={align}
        marginTop={marginTop}
      />
    );
  }

  return <>{children}</>;
};
