import Logo from "../media/logo.png";
import {BiKey, BiUser} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const Recover = () => {


    // TODO : Vistas mobile

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [inputs,setInputs] = useState({
        email: "",
    })


    const onChange = (e) => {

        if(e.target.name === "email" && !(e.target.value.length === 0)){
            emailRef.current.classList.add("recover_form_placeholder_active");
        }

        if(e.target.name === "email" && e.target.value.length === 0){
            emailRef.current.classList.remove("recover_form_placeholder_active");
        }

        if(e.target.name === "password" && !(e.target.value.length === 0)){
            passwordRef.current.classList.add("recover_form_placeholder_active_password");
        }

        if(e.target.name === "password" && e.target.value.length === 0){
            passwordRef.current.classList.remove("recover_form_placeholder_active_password");
        }


        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email",inputs["email"]);
        axios
            .post("php/recuperar_contrasena.php",formData)
            .then((res) => {
                toast.success("Se ha enviado un email!");
            })
            .catch((error) => {
                toast.error("Hubo un error mandando el mail!");
            })
    }



    return (
        <section className="recover">
            <img src={Logo} className="recover_image" alt="Drogueria Del Sol"/>
            <h1 className="recover_title">Recuperar Cuenta</h1>
            <form className="recover_form" onSubmit={onSubmit}>
                <div className="recover_form_placeholder" ref={emailRef} >
                    <BiUser/>
                    <label htmlFor="email">Email</label>
                </div>
                <input type="email" autoComplete="off" className="recover_form_input" name="email" id="email" onChange={(e) => onChange(e)}/>
                <input type="submit" value="Recuperar Cuenta" className="recover_form_submit"/>
                <span className="register_form_link">¿Ya tienes una cuenta?<Link to="/"><a>Inicia Sesión</a></Link></span>
                <span className="recover_form_link">¿No tenés una cuenta?<Link to="/registercode">Registrate Ahora</Link></span>
            </form>
        </section>
    )
}



export default Recover;