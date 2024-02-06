import React from "react";
import numerial from "numeral";

const CurencyFormat = ({ amount }) => {
  const formatedAmount = numeral(amount).format("$0,0.00");
};
export default CurencyFormat;
