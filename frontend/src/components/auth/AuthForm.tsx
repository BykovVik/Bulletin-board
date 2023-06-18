import React from "react";
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";

const AuthForm = (props:any) => {
    return(
        <>
            {props.title === 'login' &&
                <LoginForm/>
            }
            {props.title === 'registration' &&
                <RegForm/>
            }
        </>
    )
}

export default AuthForm