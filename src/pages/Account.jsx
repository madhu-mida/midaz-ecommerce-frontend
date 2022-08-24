import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

const Account = () => {
    const { user } = useAuth0();

    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <div>
            <h1>Welcome to My Account</h1>
        </div>
    );
}

export default Account;