import { BuildOptions } from "./types/config";
import type {Configuration as DevConfiguration} from 'webpack-dev-server'

//файл настройки dev-сервера
export function buildDevServer(options: BuildOptions): DevConfiguration{
  return{
    port: options.port,
    open: true, //автоматически открывать браузер
    historyApiFallback: true, //позволяет проксировать запросы через html. Эта настройка нужна при создании SPA
    hot: true //настройка для webpack hot module, который позволяет обновить приложение, чтобы внести изменения, без обновления страницы
  }
}