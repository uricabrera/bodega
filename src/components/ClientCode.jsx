import Logo from "./../media/logo.png";
import {useHistory,useParams} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import axios from "axios";
import {UserContext} from "../contexts/UserContext";
import {BiKey,BiUser} from "react-icons/bi";
import {toast} from "react-toastify";


const ClientCode = () => {
    let history = useHistory();


    const {user,setUser} = useContext(UserContext);



    const passwordRef = useRef(null);
    const nombreFarmaciaRef = useRef(null);


    const [inputs,setInputs] = useState({
        password: "",
        nombreFarmacia: ""
    })

    const onChange = (e) => {


        if(e.target.name === "password" && !(e.target.value.length === 0)){
            passwordRef.current.classList.add("register_form_placeholder_active_password");
        }

        if(e.target.name === "password" && e.target.value.length === 0){
            passwordRef.current.classList.remove("register_form_placeholder_active_password");
        }

        if(e.target.name === "nombreFarmacia" && !(e.target.value.length === 0)){
            nombreFarmaciaRef.current.classList.add("register_form_placeholder_active_nombrefarmacia");
        }

        if(e.target.name === "nombreFarmacia" && e.target.value.length === 0){
            nombreFarmaciaRef.current.classList.remove("register_form_placeholder_active_nombrefarmacia");
        }





        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("idCliente",inputs["password"]);
        formData.append("nombreFarmacia", inputs["nombreFarmacia"]);
        axios
            .post("php/verificar_codigocliente.php",formData)
            .then((res) => {
                console.log("Success! ClientCode: ",res);
                if(res.data["exists"] === "1"){
                    toast.success("Éxito!");
                    setUser({
                        ...user,
                        idCuenta: inputs["password"]
                    })
                    history.push("/register");
                }else{
                    toast.error("No se encontró usuario, contacte el servicio de administración");
                    history.push("/");
                }

            })
            .catch((err) => {
                console.log("Error!",err);
            })
    }


    const onClick = () => {
        history.push("/");
    }

    const onClickNoCode = () => {
        history.push("/register");
    }


    return(
        <section className="register">
            <img src={Logo} className="register_image" alt="Drogueria Del Sol"/>
            <h1 className="register_title">Incluye el código de cliente provisto por la empresa</h1>
            <form className="register_form" onSubmit={onSubmit}>
                <div className="register_form_placeholder register_form_placeholder_password" ref={passwordRef}>
                    <BiKey/>
                    <label htmlFor="password">Código</label>
                </div>
                <input type="text" className="register_form_input" name="password" id="password"
                       onChange={(e) => onChange(e)}/>
                <div className="register_form_placeholder" ref={nombreFarmaciaRef}>
                    <BiUser/>
                    <label htmlFor="nombreFarmacia">Nombre Farmacia</label>
                </div>
                <input type="text" className="register_form_input" name="nombreFarmacia" id="nombreFarmacia"
                       onChange={(e) => onChange(e)}/>
                <input type="submit" value="Verificar Código" className="register_form_submit"/>
            </form>
            <input type="submit" value="Registrar sin código" className="register_form_submit" onClick={onClickNoCode}/>
            <input type="submit" value="Volver a inicio" className="register_form_submit" onClick={onClick}/>
        </section>
    )
}

export default ClientCode;