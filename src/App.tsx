import { AppRouter } from "components/AppRouter/ui/AppRouter";
import { Button } from "components/Button/Button";
import { ContentBox } from "components/ContentBox";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

export const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};

export default App;
