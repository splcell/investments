import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from './SearchLink.module.scss'
import cn from 'classnames'



interface SearchLinkProps extends HTMLAttributes<HTMLAnchorElement>{
  className?: string;
  children: ReactNode;
  to: string
}

export const SearchLink = ({children, className, to, ...props}: SearchLinkProps) => {
  return(
    <Link to={to} className={cn(styles.link, className)} {...props} data-testid='search-link'>{children}</Link>
  )
}