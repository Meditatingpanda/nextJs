import { useRouter } from "next/router";

const Review = () => {
    const router=useRouter();
    const id=router.query.review;
    console.log(router.query); 
  return <h1>Here is Review {id}</h1>;
};

export default Review;
