import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../util/authContext";

function LoginPage() {
  let auth = useAuth();
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const login = (event) => {
    event.preventDefault();
    auth.login(formState);
  };

  if (auth.isLoggedIn) {
    // redirect to /protected if user is logged in
    return <Redirect to="/publicImages" />;
  }

  return (
    <div className= 'parent'>
      <h1 className='primary'>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="username" className='primary'>Username:</label>
        <input className='username'
          type="username"
          name="username"
          id="username"
          value={formState.username}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="password" className='primary'>Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleInputChange}
          required
        />
        <br />
        <button className= 'button' type="submit" onClick={login} >
          Log in
        </button>
      </form>
      <p className='primary'>
        Don't have an account yet? <Link to="/signup" style={{color: "#DCDCDC"}}>Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
