import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./Cards/OrderCard";
import CookingCard from "./Cards/CookingCard";
import ReadyCard from "./Cards/ReadyCard";
import { toast } from "react-toastify";

const OrderContainer = ({ promise }) => {
  const data = use(promise);
  const [orders,setOrders]=useState(data)
  const [cookingItems, setCookingItems] = useState([]);
  const [readyItems, setReadyItems] = useState([]);
  const handleOrder = (order) => {
    // console.log(order);
    const isExist=cookingItems.find(item=>item.id==order.id);
    if(isExist){
        toast.error("Order already on processing. !!!")
        return;
    }
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };
  const handleCooking=(order)=>{
    //1.ready items er vitore order k dhukao.
    order.cooked_At=new Date().toLocaleTimeString();
    const newReadyItems=[...readyItems,order]
    setReadyItems(newReadyItems)
    //2.cooking items er vitor thke order ta k remove korbo.
    const remaining=cookingItems.filter(item=>item.id!==order.id)
    setCookingItems(remaining);
    //orders theke order card taa k remove kore dite hobe
    const remainingOrders=orders.filter(item=>item.id!==order.id)
    setOrders(remainingOrders)
  }

  return (
    <div>
      <States
        orderTotal={orders.length}
        cookingTotal={cookingItems.length}
        readyTotal={readyItems.length}
      ></States>

      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-7">
          <h2 className="font-bold text-3xl">Current Orders</h2>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard
                handleOrder={handleOrder}
                key={order.id}
                order={order}
              ></OrderCard>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 space-y-5">
          <h2 className="font-bold text-2xl">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard 
              handleCooking={handleCooking}
              key={order.id} 
              order={order}></CookingCard>
            ))}
          </div>
          <h2 className="font-bold text-2xl">Order Ready</h2>
          <div className="shadow p-10 space-y-5">
            {
                readyItems.map(order=>
                    <ReadyCard key={order.id} order={order}></ReadyCard>
                )
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
