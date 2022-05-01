import React from "react";
import SignInSide from "./component/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./component/singUp/SingUp";
import Dashboard from "./component/dashboeard/Dashboeard";
import UserAuth from "./component/navigate/UserAuth";
import Index from "./component/home/onepirate/Home"
import Test from "./component/Test";
import Rediration from "./component/navigate/Rediration";


function App() {
  
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Rediration>
          <Index/>{" "}
            </Rediration>} />
        <Route
          path="/*"
          element={
            <UserAuth>
              <Dashboard/>{" "}
            </UserAuth>
          }
        />
        <Route path="login" element={<Rediration><SignInSide/></Rediration>}></Route>
        <Route path="signup" element={<Rediration><SignUp/></Rediration>}></Route>
        
        <Route path="/test/*" element={<Test />}></Route> 
      </Routes>   
    </div>
  );
}

export default App;
