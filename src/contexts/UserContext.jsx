import {createContext,useState, useContext} from "react";



export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user,setUser] = useState({
        token: "",
        datos: {}
    });


    // I'm going to add different methods that will be definitely useful for interacting with the user :D

    // Voy a añadir diferentes métodos que definitivamente serán útiles para la interacción con usuarios ^-^



    const setUserToken = (token) => {
        setUser({
            ...user,
            token: token
        })
    }

    const setUserDato = (dato) => {
        let datoArray = Object.entries(dato)
        setUser({
            ...user,
            datos: {
                ...user.datos,
                [datoArray[0][0]]: datoArray[0][1]
            }
        })
    }


    return(
        <UserContext.Provider value={{user,setUser,setUserToken,setUserDato}}>
            {children}
        </UserContext.Provider>
    );
};