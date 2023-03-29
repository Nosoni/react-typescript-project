import Layout from "./components/Layout";
import { ThemeContext } from "./components/ThemeContext";
import "./App.scss";

function App() {
  return (
    <ThemeContext>
      <Layout />
    </ThemeContext>
  );
}

export default App;
