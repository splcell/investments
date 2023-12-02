import { AppRouter } from "components/AppRouter/ui/AppRouter";
import { Button } from "components/Button/Button";
import { ContentBox } from "components/ContentBox";
import { Header } from "components/Header";
const key = process.env.REACT_APP_API_KEY

export const apiKey = '0' + key

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
