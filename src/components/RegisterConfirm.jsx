import Logo from "./../media/logo.png";
import {Link, useHistory} from "react-router-dom";
import {useContext, useRef, useState} from "react";
import {UserContext} from "../contexts/UserContext";
import {BiKey, BiUser} from "react-icons/bi";
import axios from "axios";

const RegisterConfirm = () => {

    let history = useHistory();

    const {user: {datos: {email}}} = useContext(UserContext);

    const passwordRef = useRef(null);


    const [inputs,setInputs] = useState({
        password: "",
        email
    })

    const onChange = (e) => {


        if(e.target.name === "password" && !(e.target.value.length === 0)){
            passwordRef.current.classList.add("register_form_placeholder_active_password");
        }

        if(e.target.name === "password" && e.target.value.length === 0){
            passwordRef.current.classList.remove("register_form_placeholder_active_password");
        }





        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("password",inputs["password"]);
        formData.append("email",inputs["email"]);
        axios
            .post("../php/verificar_usuario.php",formData)
            .then((res) => {
                console.log("Success!",res);
                history.push("/register/activate");
            })
            .catch((err) => {
                console.log("Error!",err);
            })
    }


    const onClick = () => {
        history.push("/");
    }


    return(
        <section className="register">
            <img src={Logo} className="register_image" alt="Drogueria Del Sol"/>
            <h1 className="register_title">Revisa tu correo electrónico {email} para finalizar el proceso de registro y copia el código que encuentres alli</h1>
            <form className="register_form" onSubmit={onSubmit}>
                <div className="register_form_placeholder register_form_placeholder_password" ref={passwordRef}>
                    <BiKey/>
                    <label htmlFor="password">Código</label>
                </div>
                <input type="text" className="register_form_input" name="password" id="password"
                       onChange={(e) => onChange(e)}/>
                <input type="submit" value="Verificar Código" className="register_form_submit"/>
            </form>
            <input type="submit" value="Volver a inicio" className="register_form_submit" onClick={onClick}/>
        </section>
    )
}


export default RegisterConfirm;