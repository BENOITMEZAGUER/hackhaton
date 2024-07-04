import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TopBar />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
