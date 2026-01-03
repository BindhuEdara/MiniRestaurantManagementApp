import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef(null)
  const { setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    emailRef.current.focus();
  })

  const handleSubmit = () => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      alert("login successfully");
      setIsAuth(true);
      navigate('/admin/dashboard')
    } else  {
      alert("Invalid Login details")
    }
    if (email === "customer@gmail.com" && password === "customer1234") {
      alert("customer login successfully")
      setIsAuth(true);
      navigate('/customers/dashboard')
    } else {
      alert("Invalid login details")
    }
  }
  return (
    <div>
      <h2 style={{fontSize:"50px"}}>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{width:"300px", padding:"6px"}} ref={emailRef} />
        <br />
        <br />
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"300px", padding:"6px"}}/>
        <br />
      <button>Login</button>
      </form>
    </div>
  )
}
export default Login;
