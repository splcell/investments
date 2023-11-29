import { Link } from "react-router-dom"
import styles from './NewsLink.module.scss'
import { ReactNode } from "react";
import cn from 'classnames'

interface NewsLinkProps{
  className?: string;
  children: ReactNode;
  to: string;
}

export const NewsLink = ({className, children, to}: NewsLinkProps) => {
  return (
    <Link to={to} className={cn(styles.newsLink, className)}>{children}</Link>
  )
}