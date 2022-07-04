import {  useRoutes } from "react-router-dom";
import AppRoutes from "./routes";
import { Suspense,  } from 'react';



export const App = () => {
  const element = useRoutes(AppRoutes);
  return (  
    <Suspense fallback={<> Loading ... </>}>    
    {element}
</Suspense>
  )
  ;
};

export default App;
