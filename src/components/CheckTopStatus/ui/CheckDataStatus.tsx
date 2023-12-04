import { ContentBox } from "components/ContentBox";
import { memo } from "react";
import styles from "./CheckDataStstus.module.scss";
import { Text } from "components/Text";
import { Preloader } from "components/Preloader";

interface CheckDataStatusProps {
  isLoading: boolean;
  error: string | undefined;
  title: string;
  boxWidth?: number;
  boxHeight?: number;
  align?: 'left' | 'center'
}

export const CheckDataStatus = memo(
  ({ isLoading, error, title, boxWidth, boxHeight, align }: CheckDataStatusProps) => {
    const boxSize = {width: `${boxWidth}px`, height: `${boxHeight}px`}


    if (isLoading) {
      return (
        <ContentBox className={styles.loadingBox} style={boxSize}>
          <Text title={title} bordered align={align ? align : 'center'} size={18} />
          <Preloader />
        </ContentBox>
      );
    }

    if (error) {
      return (
        <ContentBox className={styles.loadingBox} style={boxSize}>
          <Text title={title} bordered align={align} size={18} />
          <Text title={error} align={align ? align : 'center'} size={18} marginTop={150} />
        </ContentBox>
      );
    }
  }
);
