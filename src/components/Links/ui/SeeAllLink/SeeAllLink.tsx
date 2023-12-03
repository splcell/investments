import { Link } from "react-router-dom";
import styles from './SeeAllLink.module.scss'
import { HTMLAttributes, ReactNode, useCallback } from "react";
import cn from 'classnames'
import { useAppDispatch } from "hooks/hooks";
import { SearchActions } from "components/Search";
import { LuChevronsRight } from "react-icons/lu";

interface SeeAllLinkProps extends HTMLAttributes<HTMLAnchorElement>{
  className?: string;
  children: ReactNode;
  path: string;
  marginTop?: number
}


export const SeeAllLink = ({className, children, path, marginTop, ...props}: SeeAllLinkProps) => {
  const dispatch = useAppDispatch()

  const onClick = useCallback(() => {
    dispatch(SearchActions.cleanQuery());
    dispatch(SearchActions.cleanResults());
  }, [dispatch])

  return (
    <Link to={path} className={cn(styles.link, className)} onClick={onClick} {...props} style={{marginTop: `${marginTop}px`}}>
      {children}
      <LuChevronsRight />
    </Link>
  )
}