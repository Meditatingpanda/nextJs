function users({ data }) {
  const { users } = data;
  return (
    <div>
      {users.map((value) => {
        return (
          <div key={value.id}>
            <h1>{value.firstName}</h1>
            <h1>{value.birthDate}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default users;
//these are run as serverSide codes not serve to the browser.`
export async function getStaticProps() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
