import React, { useState } from "react";
import FormInput from "../formInput/FormInput";

const UserInput = () => {
  const [sharePriceInput, setSharePriceInput] = useState(0);

  const onChangeInput = () => {};

  return (
    <div className="shareprice-inputs">
      <div className="input-fields">
        <div>
          <FormInput type="number" name="shareprice" title="Share Price" value={sharePriceInput} onChange={onChangeInput} />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
