import Form from "./Form";

export default function Home() {
  var userId = localStorage.getItem("loggedInUser");

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <div>
        <h2>Home Page</h2>
        {/* <a href="/create-account">SignUp</a>
        <a href="/login">Login</a> */}
        {userId == null && (
          <div>
            <a href="/create-account">SignUp</a>
            <a href="/login">Login</a>
          </div>
        )}
        {userId != null && (
          <div>
            <buton className="btn" onClick={(e) => logout(e)}></buton>
          </div>
        )}
      </div>
      {/* <Form /> */}
    </>
  );
}
