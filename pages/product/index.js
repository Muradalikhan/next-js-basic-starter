import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div>
      <h1>Product main page</h1>

      <ul>
        <li>
          <Link href="product/1">1</Link>
        </li>
        <li>
          <Link href="product/2">2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
