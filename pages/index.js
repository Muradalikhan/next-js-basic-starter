import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export default function Home(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          <Link href={item.id}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Regenrating ...")
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if(!data){
    return{
      redirect:{
        destination:"no-data"
      }
    }
  }
  if(data.products.length===0){
    return{
      noFound:true
    }
  }
  return {
    props: {
      products: data.products,
    },
    revalidate:5
  };
}
