const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((key) => (
            <>
          <li key={key.id}>{key.title}</li>
          <hr/>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
