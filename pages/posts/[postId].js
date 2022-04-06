const Post = () => {
  return <div>Enter</div>;
};
//ADDED DYNAMIC PATH
export default Post;
export async function getStaticPaths() {
  return {
    paths: ["1"],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  console.log(context);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
