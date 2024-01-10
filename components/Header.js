import React, {useState} from "react";

const Header = () =>{
    const [loginToggle, setLoginToggle] = useState("Login");

    return(
        <div className="header">
            <div className="logo">
                <img src="https://i.pinimg.com/originals/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.png"/>
            </div>
            <div className="nav-list">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <button onClick={ () => {
                    setLoginToggle("Logout")
                    if(loginToggle === "Logout"){
                        setLoginToggle("Login")
                    }
                }}>{loginToggle}</button>
            </div>
        </div>
    )
}

export default Header;