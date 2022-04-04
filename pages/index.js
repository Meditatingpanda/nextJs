import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order Placed");
    router.push("/product");
  };
  return (
    <div>
      Home Page
      <br />
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product">
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
      <br />
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  );
}
