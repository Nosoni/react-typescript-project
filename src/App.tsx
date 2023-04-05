import { ThemeContext } from "./context/ThemeContext";
import "./App.scss";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <ThemeContext>
      <Layout />
    </ThemeContext>
  );
};

export default App;
