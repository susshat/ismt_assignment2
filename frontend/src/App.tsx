import {  useRoutes } from "react-router-dom";
import AppRoutes from "./routes";
import { Suspense, useEffect, useState,  } from 'react';
import { atom, useRecoilState } from "recoil";
import axios from "axios";

const textState = atom<any>({
  key: 'auth', // unique ID (with respect to other atoms/selectors)
  default: {
    authState:undefined,
    user:undefined
  }, // default value (aka initial value)
});


export const App = () => {
  const element = useRoutes(AppRoutes);
  const [text, setText] = useRecoilState(textState);

 
  useEffect(()=>{
    axios.get('/api/user/profile').then(
     (res)=>{ setText({authState:true, user:res.data})})
  })
  return (  
    <Suspense fallback={<> Loading ... </>}>    
    {element}
</Suspense>
  )
  ;
};

export default App;
