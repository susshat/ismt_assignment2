const {  useRoutes } =require( "react-router-dom");
const AppRoutes = require("./routes");
const { Suspense, useEffect, useState,  } =require ('react');
const { atom, useRecoilState } =require ("recoil");
const axios = require("axios");

export const textState = atom({
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
