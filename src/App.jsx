
import { Suspense } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import OrderContainer from "./Components/OrderContainer";
import Loading from "./Components/Loading";

const loadOrders=()=>fetch("/orders.json").then(res=>res.json());

function App() {
  const ordersPromise=loadOrders();
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
    </div>
  );
}

export default App;
