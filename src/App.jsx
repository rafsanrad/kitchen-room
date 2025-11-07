import { Suspense } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import OrderContainer from "./Components/OrderContainer";
import Loading from "./Components/Loading";
import { ToastContainer } from "react-toastify";

const loadOrders = () => fetch("/orders.json").then((res) => res.json());

function App() {
  const ordersPromise = loadOrders();
  return (
    <div>
      <header className="py-3 w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
      <section>
        <Suspense fallback={<Loading></Loading>}>
          <OrderContainer promise={ordersPromise}></OrderContainer>
        </Suspense>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
