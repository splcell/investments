import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean){
  return(
    {
      //лоадер для sass и scss файлов
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              //активируем css-модули
              auto: (resPath: string) => Boolean(resPath.includes(".module.")), //делаем модулями только файлы, у которых в названии есть module
              localIdentName: isDev
                ? "[path][name]__[local]--[hash:base64:5]"
                : "[hash:base64:8]", //определяем нормальные имена классов для dev сборки и хэш имена для production
            },
          },
        },
        "sass-loader",
      ],
    }
  )
}