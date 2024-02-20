import React, { useContext, useState, useEffect } from "react";
import classes from "./Orders.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../components/dataProvider/DataProvider";
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrder(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrder([]);
    }
  }, []);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {Orders?.length == 0 && <div style={{padding:"20px"}}>you don't have orders yet</div>}
          {/* order items */}
          <div>
            {order?.map((eachOrder) => {
              return (
                <div>
                  <hr />
                  <p>Order ID{eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    <ProductCard flex={true} product={order} key={order.id} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
