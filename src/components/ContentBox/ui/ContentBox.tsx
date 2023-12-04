import { HTMLAttributes, ReactNode } from "react";
import styles from "./ContentBox.module.scss";
import cn from "classnames";
// import React from "react";

interface ContentBoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const ContentBox = ({ children, className, ...props }: ContentBoxProps) => {
  return <div className={cn(styles.contentBox, className)} {...props}>{children}</div>;
};
