import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main>
        <Sidebar />

        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
