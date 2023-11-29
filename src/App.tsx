import { AppRouter } from "components/AppRouter/ui/AppRouter";
import { Button } from "components/Button/Button";
import { ContentBox } from "components/ContentBox";
import { Header } from "components/Header";

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
