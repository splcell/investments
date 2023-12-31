import { HTMLAttributes, memo } from "react";
import styles from './Text.module.scss'
import cn from 'classnames'

interface TextProps{
  className?: string,
  title?: string,
  text?: string,
  bordered?: boolean,
  align?: 'left' | 'center',
  size?: number
  marginTop?: number
}

export const Text = memo(({className, title, text, bordered=false, align='left', size, marginTop}: TextProps) => {
  return(
    <>
      {title && <h2 className={cn(styles.title, className, {
        [styles[align]]: align,
        [styles.bordered]: bordered === true,
      })} style={{fontSize: `${size}px`, marginTop: `${marginTop}px`}}>{title}</h2>}
      {text && <p className={cn(styles.text, className)}>{text}</p>}
    </>
  )
})