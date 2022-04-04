import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();

 const id = router.query.productId;
  return <h1>Here are the product details!! of product {id}</h1>;
};

export default ProductDetails;
