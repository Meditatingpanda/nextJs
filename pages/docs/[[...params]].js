//catch all routes starting with docs

import { useRouter } from "next/router";

const Docs = () => {
 const router =useRouter();
 //console.log(router.query)
 //initial value is undefined of param value due to prerendering features of next
 //only docs route will return 404 page but optional catch all route will take care of that.
 //just add another [] after it.
const {params=[]} =router.query;
console.log(params);
    return (
        <div>
           <h1>Docs Home Page</h1>
        </div>
    );
}

export default Docs;