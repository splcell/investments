import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions, BuildPaths } from "./types/config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import Dotenv from 'dotenv-webpack'


//файл для декомпозиции конфига
export function buildPlugins({
  paths,
  isDev,
  project
}: BuildOptions): webpack.WebpackPluginInstance[] {

  const plugins = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html, 
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __PROJECT__: JSON.stringify(project),
     
    }),

    new Dotenv()
  ]

  

  if(isDev){
    plugins.push(new webpack.HotModuleReplacementPlugin()) //плагин который вносит изменения в приложение без обновления страницы
    plugins.push( new BundleAnalyzerPlugin({ //плагин для анализа размера бандла
      openAnalyzer: false // интрерфейс плагина не открывается при запуске, а доступен в консоли по ссылке
    }) ) 
  }

  return plugins
}