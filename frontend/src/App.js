import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-16">
        {/* outlet lets the connected pages display their content in the main app.js files */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
