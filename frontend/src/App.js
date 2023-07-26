import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          {/* outlet lets the connected pages display their content in the main app.js files */}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
