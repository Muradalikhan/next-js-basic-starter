import React from "react";
import { useRouter } from "next/router";

const DaynamicBlog = () => {
  const router = useRouter();
  console.log(router?.query?.slug);
  return <h1>this is a daynamic blog</h1>;
};

export default DaynamicBlog;
