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
  bordered?: boolean
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
  bordered,
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
        bordered={bordered}
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
        bordered={bordered}
      />
    );
  }

  return <>{children}</>;
};
