import Logo from "./../media/logo.png";
import {useHistory,useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";


const RegisterActivation = () => {

    let history = useHistory();





    const onClick = () => {
        history.push("/");
    }


    useEffect(() => {

    },[])


    return(
        <section className="register">
            <img src={Logo} className="register_image" alt="Drogueria Del Sol"/>
            <h1 className="register_title">Gracias por activar tu cuenta!</h1>
            <input type="submit" value="Volver a inicio" className="register_form_submit" onClick={onClick}/>
        </section>
    )
}


export default RegisterActivation;