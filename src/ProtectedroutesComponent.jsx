import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedroutesComponent() {

    const [isLogged, setIsLogged] = useState(false);
    const [waiting, setWaiting] = useState(true);

    useEffect(() => {
        fetch('/api/securewebsite/xhtyld/', {
            method: "GET",
            credentials: "include"
        }).then(response => {
            if (response.ok) {
                setWaiting(false);
                setIsLogged(true);
            }
            return response.json();
        }).then(data => {
            localStorage.setItem("user", data.user.email);
            console.log("protected routes"+ data.user);
        }).catch(err => {
            console.log("Error protected routes: ", err);
            setWaiting(false);
            
        });
    }, []);

    return waiting ? <div className="waiting-page">
        <div>Waiting...</div>
    </div> :
        isLogged ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedroutesComponent;