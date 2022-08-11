import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import routes from "./Routes/routes";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
