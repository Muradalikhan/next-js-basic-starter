import React, { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

const ProductDetail = (props) => {
  const { loadedProduct } = props;
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

export default ProductDetail;

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData()
  const product = data.products.find((product) => product.id === productId);
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData()

  const ids=data.products.map((product)=>(product.id))
  const paramsWithPath=ids.map((id)=>({params:{pid:id}}))
  return {
    paths: paramsWithPath,
    // fallback: false,
    fallback: "blocking",
  };
}
