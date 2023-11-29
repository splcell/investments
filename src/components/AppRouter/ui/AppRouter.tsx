import { CompanyPage } from 'pages/CompanyPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {ReactElement} from 'react';
import {Routes, Route} from 'react-router-dom';

interface Path{
  path: string
  element: ReactElement
}

const paths: Path[] = [
  {
    path: '/',
    element: <MainPage />
  },

  {
    path: '/company/:ticker',
    element: <CompanyPage />
  },

  {
    path: '*',
    element: <NotFoundPage />
  }
]

export const AppRouter = () => {
  return(
    <Routes>
      {paths.map(path => (
        <Route key={path.path} path={path.path} element={path.element}/>
      ))}
    </Routes>
  )
}