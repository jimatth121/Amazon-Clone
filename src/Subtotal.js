import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider.";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const total = basket?.reduce(
    (accumulator, currentvalue) => currentvalue.price + accumulator,
    0
  );
  console.log(total);
  setTimeout(() => {}, 300);
  return (
    <div className="subtotal w-[100%] md:w-[300px]">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
