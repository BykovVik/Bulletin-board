import React from "react";
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";

type Props = {
    title: String
}

const AuthForm = (props:Props) => {
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