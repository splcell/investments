export interface BuildPaths { //интерфейс для путей к папкам и файлам
  entry: string,
  build: string,
  html: string,
  src: string
}

export interface BuildOptions{ //интерфейс для вариантов сборки production или development
  mode: 'production' | 'development',
  paths: BuildPaths,
  isDev: boolean,
  port : number,
  project: 'storybook' | 'frontend' | 'jest' //переключение среды разработки
}

export interface BuildEnv{
  mode: 'production' | 'development',
  port: number
}