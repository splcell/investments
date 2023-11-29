declare module 'webpack-bundle-analyzer'
declare module '*.scss'{ //включаем поддержу scss модулей в typescript
  interface IClassNames{
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

//включаем поддержку разных форматов изображений и иконок
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"

declare module "*.svg" { 
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest'