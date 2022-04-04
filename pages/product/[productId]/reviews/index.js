import { useRouter } from "next/router";

const Reviews = () => {
  const router = useRouter();
  const id = router.query.productId;
  return <h1>Here Are Reviews OF Product {id}</h1>;
};
export default Reviews;
