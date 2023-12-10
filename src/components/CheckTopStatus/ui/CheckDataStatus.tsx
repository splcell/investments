import { ContentBox } from "components/ContentBox";
import { memo } from "react";
import styles from "./CheckDataStstus.module.scss";
import { Text } from "components/Text";
import { Preloader } from "components/Preloader";

interface CheckDataStatusProps {
  isLoading?: boolean;
  error?: string | undefined;
  title: string;
  boxWidth?: number;
  boxHeight?: number;
  align?: "left" | "center";
  className?: string;
  marginTop?: number;
}

export const CheckDataStatus = memo(
  ({
    isLoading,
    error,
    title,
    boxWidth,
    boxHeight,
    align,
    className,
    marginTop
  }: CheckDataStatusProps) => {
    const boxSize = { width: `${boxWidth}px`, height: `${boxHeight}px` };

    if (isLoading) {
      return (
        <ContentBox
          className={className ? className : styles.loadingBox}
          style={boxSize}
        >
          <Text
            title={title}
            bordered
            align={align ? align : "center"}
            size={18}
          />
          <Preloader data-testid="preloader" />
        </ContentBox>
      );
    }

    if (error) {
      return (
        <ContentBox
          className={className ? className : styles.loadingBox}
          style={boxSize}
        >
          <Text
            title={title}
            bordered
            align={align ? align : "left"}
            size={18}
          />
          <Text
            title={error}
            align={error ? "center" : align}
            size={18}
            marginTop={marginTop ? marginTop : 150}
          />
        </ContentBox>
      );
    }
  }
);
