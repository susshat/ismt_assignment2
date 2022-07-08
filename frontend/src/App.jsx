import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import axios from 'axios'
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Dashboard from "./components/dashboard";


export const textState = atom({
  key: 'auth', // unique ID (with respect to other atoms/selectors)
  default: {
    authState: undefined,
    user: undefined
  }, // default value (aka initial value)
});

export const App = () => {

  const [text, setText] = useRecoilState(textState);

  useEffect(() => {
    axios.get('/api/user/profile').then(
      (res) => { setText({ authState: true, user: res.data }) })
  })

  return (
    <Routes>
      <Route path="/register" element={<Register open />} />
      <Route path="/login" element={<Login open />} />
      <Route path="/dashboard" element={<Dashboard open />} />
      <Route index element={<Navigate to='login' />} />

    </Routes>
  )
    ;
};

export default App;
