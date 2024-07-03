import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
