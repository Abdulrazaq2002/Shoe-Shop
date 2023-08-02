import React, { useState } from "react";
import ProductDetails from "./Productdetails";
function Selected(item) {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <>
      <div>{selectedItem && <ProductDetails item={selectedItem} />}</div>)
    </>
  );
}

export default Selected;
