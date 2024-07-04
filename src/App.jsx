import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
