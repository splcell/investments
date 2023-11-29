import { ReactNode } from 'react'
import styles from './ContentBox.module.scss'
import cn from 'classnames'

interface ContentBoxProps{
  className?: string
  children: ReactNode,
}

export const ContentBox = ({children, className}: ContentBoxProps) => {
  return(
    <div className={cn(styles.contentBox, className)}>
      {children}
    </div>
  )
}