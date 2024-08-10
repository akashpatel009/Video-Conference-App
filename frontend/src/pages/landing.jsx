import React from 'react'
import "../App.css";
import { Link, useNavigate } from 'react-router-dom'


export default function landing() {

  const router = useNavigate();
  
  return (
    <div className='LandingPageContainer'>
      <nav >

           <div className='navHeader'>
              <h2>Dev Video Call</h2>
           </div>

           <div className='navlist'>
            <p onClick={() => {
              router("/aljk23")
            }}>Join as Guest</p>
            <p  onClick={() => {
              router("/auth")
            }} >Register</p>
            <div onClick={() => {
              router("/auth")
            }} role='button'><p>Login</p></div>
           </div>

      </nav>


        <div className="LandingMainContainer">
          <div>
            <h2><span style={{color:"orange"}}>Connent </span>with your loved Ones</h2>

            <p>Cover a distance by Boys Video Call</p>
            <div role='button'>
              <Link to={"/auth"}>Get Started</Link>
            </div>
          </div>

          <div>
            <img src='/media/mobile.png' alt="moblie"/>

          </div>
        </div>


    </div>
  )
}
