import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import UseProtectWrapper from "./pages/UseProtectWrapper";
import { UserDataContext } from "./context/UserContext";
import Riding from "./pages/Riding";
// import { useContext } from 'react'
import Home from "./pages/Home";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainRiding from "./pages/CaptainRiding";

function App() {
  // const ans = useContext(UserDataContext);
  // console.log(ans);

  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/riding" element={ <Riding /> } />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-riding" element={ <CaptainRiding /> } />
          <Route
            path="/home"
            element={
              <UseProtectWrapper>
                <Home />
              </UseProtectWrapper>
            }
          />
          <Route 
            path="/logout" 
            element={
              <UseProtectWrapper>
                <UserLogout />
              </UseProtectWrapper>
            } 
          />
          <Route 
          path="/captain-home"
          element={ 
            <CaptainProtectWrapper>
              <CaptainHome /> 
            </CaptainProtectWrapper>
          }
          />
          <Route 
            path="/captain-logout"
            element={ 
              <CaptainProtectWrapper>
                  <CaptainLogout /> 
              </CaptainProtectWrapper>
            } 
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
