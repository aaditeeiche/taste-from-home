import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);
      const resData = await res.json();
      // console.log(resData);
      dispatch(setDataProduct(resData));
    })();
  }, []);

  // console.log(productData);
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
