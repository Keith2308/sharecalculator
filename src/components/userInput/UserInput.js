import React, { useState, useEffect } from "react";
import FormInput from "../formInput/FormInput";

const UserInput = () => {
  const [input, setInput] = useState({
    shareprice: "",
    quantity: "",
  });
  const [result, setResult] = useState("");

  const brokerageFee = 0.001;
  const clearningFee = 0.0003;
  // const stampDuty = 1;
  const brokeragefeemin = 8;
  const clearningMax = 200;
  const stampDutyMax = 200;
  const serviceTax = 0.006;

  useEffect(() => {
    const totalSharePrice = input.shareprice * input.quantity;
    const calBrokerageFee = (totalSharePrice) => {
      if (totalSharePrice * brokerageFee > 8) {
        return totalSharePrice * brokerageFee;
      } else {
        return brokeragefeemin;
      }
    };
    const calClearningFee = (totalSharePrice) => {
      if (totalSharePrice * clearningFee < 200) {
        return Math.round((totalSharePrice * clearningFee * 100) / 100);
      } else {
        return clearningMax;
      }
    };
    const calStampDuty = (totalSharePrice) => {
      if (Math.ceil(totalSharePrice / 1000) < 200) {
        return Math.ceil(totalSharePrice / 1000);
      } else {
        return stampDutyMax;
      }
    };
    const calServiceTax = (calBrokerageFee) => {
      return calBrokerageFee * serviceTax;
    };
    const finalPrice =
      totalSharePrice +
      calBrokerageFee(totalSharePrice) +
      calClearningFee(totalSharePrice) +
      calStampDuty(totalSharePrice) +
      calServiceTax(calBrokerageFee());
    console.log(
      totalSharePrice,
      calBrokerageFee(totalSharePrice),
      calClearningFee(totalSharePrice),
      calStampDuty(totalSharePrice),
      calServiceTax(calBrokerageFee())
    );
    setResult(finalPrice);
  }, [input]);

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="shareprice-inputs">
      <div className="input-fields">
        <div>
          <FormInput
            type="number"
            name="shareprice"
            title="Share Price"
            placeholder="Share Price"
            value={input.shareprice}
            onChange={onChangeInput}
          />
          <FormInput
            type="number"
            name="quantity"
            title="Quantity"
            placeholder="Quantity"
            value={input.quantity}
            onChange={onChangeInput}
          />
        </div>
        <h3>Result</h3>
        {result}
      </div>
    </div>
  );
};

export default UserInput;
