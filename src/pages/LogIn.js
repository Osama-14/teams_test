import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home")
      } else {
        // User is signed out
        // ...
      }
    });    
  },[]);
  

  
  const [email , setEmail]=useState("");
  const [pass , setPass]=useState("");
  const onLogIn = () => {
    
signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // alert("Logged in");
    navigate("/home");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  return (
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={email}
          onChange={(e)=>setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
        />
      </Form.Item>


      <Form.Item>
        <Button onClick={onLogIn} type="primary" htmlType="submit" className="login-form-button">
        <Link to="">Log in</Link>
        </Button>
          Not have Account? <Link to="SignUp">register now!</Link>
      </Form.Item>
    </Form>  
    )
  };
  
  export default LogIn;
  



  





