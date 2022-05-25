import Logo from "./../media/logo.png";
import {BiUser,BiKey} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useState,useRef,useContext} from "react";
import {useHistory} from "react-router-dom";
import {UserContext} from "../contexts/UserContext";
import axios from "axios";

const Register = () => {

    let history = useHistory();

    const {user,setUser} = useContext(UserContext);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const nombreFarmaciaRef = useRef(null);
    const razonSocialRef = useRef(null);
    const nombreApellidoContactoRef = useRef(null);
    const telefonoContactoRef = useRef(null);
    const whatsappContactoRef = useRef(null);
    const direccionRef = useRef(null);
    const provinciaRef = useRef(null);
    const ciudadRef = useRef(null);

    const [inputs,setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        nombreFarmacia: "",
        razonSocial: "",
        nombreApellidoContacto: "",
        telefonoContacto: "",
        whatsappContacto: "",
        direccion: "",
        provincia: "",
        ciudad: ""
    })

    const onChange = (e) => {

        if(e.target.name === "email" && !(e.target.value.length === 0)){
            emailRef.current.classList.add("register_form_placeholder_active");
        }

        if(e.target.name === "email" && e.target.value.length === 0){
            emailRef.current.classList.remove("register_form_placeholder_active");
        }

        if(e.target.name === "password" && !(e.target.value.length === 0)){
            passwordRef.current.classList.add("register_form_placeholder_active_password");
        }

        if(e.target.name === "password" && e.target.value.length === 0){
            passwordRef.current.classList.remove("register_form_placeholder_active_password");
        }

        if(e.target.name === "confirmPassword" && !(e.target.value.length === 0)){
            confirmPasswordRef.current.classList.add("register_form_placeholder_active_confirmpassword");
        }

        if(e.target.name === "confirmPassword" && e.target.value.length === 0){
            confirmPasswordRef.current.classList.remove("register_form_placeholder_active_confirmpassword");
        }

        if(e.target.name === "nombreFarmacia" && !(e.target.value.length === 0)){
            nombreFarmaciaRef.current.classList.add("register_form_placeholder_active_nombrefarmacia");
        }

        if(e.target.name === "nombreFarmacia" && e.target.value.length === 0){
            nombreFarmaciaRef.current.classList.remove("register_form_placeholder_active_nombrefarmacia");
        }


        if(e.target.name === "razonSocial" && !(e.target.value.length === 0)){
            razonSocialRef.current.classList.add("register_form_placeholder_active_razonsocial");
        }

        if(e.target.name === "razonSocial" && e.target.value.length === 0){
            razonSocialRef.current.classList.remove("register_form_placeholder_active_razonsocial");
        }

        if(e.target.name === "nombreApellidoContacto" && !(e.target.value.length === 0)){
            nombreApellidoContactoRef.current.classList.add("register_form_placeholder_active_nombreapellidocontacto");
        }

        if(e.target.name === "nombreApellidoContacto" && e.target.value.length === 0){
            nombreApellidoContactoRef.current.classList.remove("register_form_placeholder_active_nombreapellidocontacto");
        }

        if(e.target.name === "telefonoContacto" && !(e.target.value.length === 0)){
            telefonoContactoRef.current.classList.add("register_form_placeholder_active_telefonocontacto");
        }

        if(e.target.name === "telefonoContacto" && e.target.value.length === 0){
            telefonoContactoRef.current.classList.remove("register_form_placeholder_active_telefonocontacto");
        }

        if(e.target.name === "whatsappContacto" && !(e.target.value.length === 0)){
            whatsappContactoRef.current.classList.add("register_form_placeholder_active_whatsappcontacto");
        }

        if(e.target.name === "whatsappContacto" && e.target.value.length === 0){
            whatsappContactoRef.current.classList.remove("register_form_placeholder_active_whatsappcontacto");
        }

        if(e.target.name === "direccion" && !(e.target.value.length === 0)){
            direccionRef.current.classList.add("register_form_placeholder_active_direccion");
        }

        if(e.target.name === "direccion" && e.target.value.length === 0){
            direccionRef.current.classList.remove("register_form_placeholder_active_direccion");
        }

        if(e.target.name === "provincia" && !(e.target.value.length === 0)){
            provinciaRef.current.classList.add("register_form_placeholder_active_provincia");
        }

        if(e.target.name === "provincia" && e.target.value.length === 0){
            provinciaRef.current.classList.remove("register_form_placeholder_active_provincia");
        }

        if(e.target.name === "ciudad" && !(e.target.value.length === 0)){
            ciudadRef.current.classList.add("register_form_placeholder_active_ciudad");
        }

        if(e.target.name === "ciudad" && e.target.value.length === 0){
            ciudadRef.current.classList.remove("register_form_placeholder_active_ciudad");
        }




        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        for(let field in inputs){
            if(!inputs[field]){
                return "";
            }
        }
        if(inputs["password"] !== inputs["confirmPassword"]){
            return "";
        }
        setUser({
            ...user,
            datos: {
                ...user.datos,
                email: inputs["email"],
                nombreFarmacia: inputs["nombreFarmacia"],
                razonSocial: inputs["razonSocial"],
                nombreApellidoContacto: inputs["nombreApellidoContacto"],
                telefonoContacto: inputs["telefonoContacto"],
                whatsappContacto: inputs["whatsappContacto"],
                direccion: inputs["direccion"],
                provincia: inputs["provincia"],
                ciudad: inputs["ciudad"]
                // razonSocial nombreApellidoContacto telefonoContacto whatsappContacto direccion provincia ciudad
            }
        })
        const formData = new FormData();
        formData.append("email", inputs["email"]);
        formData.append("password", inputs["password"]);
        formData.append("nombreFarmacia",inputs["nombreFarmacia"]);
        formData.append("razonSocial",inputs["razonSocial"]);
        formData.append("nombreApellidoContacto",inputs["nombreApellidoContacto"]);
        formData.append("telefonoContacto",inputs["telefonoContacto"]);
        formData.append("whatsappContacto",inputs["whatsappContacto"]);
        formData.append("direccion",inputs["direccion"]);
        formData.append("provincia",inputs["provincia"]);
        formData.append("ciudad",inputs["ciudad"]);
        formData.append("idCuenta", user["idCuenta"]);
        axios
            .post("php/guardar_usuario.php",formData)
            .then((res) => {
                console.log("Success!",res);
            })
            .catch((err) => {
                console.log("Error!",err);
            })
        history.push("/register/confirm");
    }

    return(
        <section className="register">
            <img src={Logo} className="register_image" alt="Drogueria Del Sol"/>
            <h1 className="register_title">Registrarse</h1>
            <form className="register_form" onSubmit={onSubmit}>
                <div className="register_form_placeholder" ref={emailRef}>
                    <BiUser/>
                    <label htmlFor="email">Email</label>
                </div>
                <input type="email" className="register_form_input" name="email" id="email" onChange={(e) => onChange(e) } autocomplete="off"/>
                <div className="register_form_placeholder register_form_placeholder_password" ref={passwordRef} >
                    <BiKey/>
                    <label htmlFor="password">Contraseña</label>
                </div>
                <input type="password" className="register_form_input" name="password" id="password" onChange={(e) => onChange(e) }/>
                <div className="register_form_placeholder register_form_placeholder_password" ref={confirmPasswordRef}>
                    <BiKey/>
                    <label htmlFor="confirmPassword">Confirmar contraseña</label>
                </div>
                <input type="password" className="register_form_input" name="confirmPassword" id="confirmPassword" onChange={(e) => onChange(e) }/>
                <div className="register_form_placeholder" ref={nombreFarmaciaRef}>
                    <BiUser/>
                    <label htmlFor="nombreFarmacia">Nombre Farmacia</label>
                </div>
                <input type="text" className="register_form_input" name="nombreFarmacia" id="nombreFarmacia" onChange={(e) => onChange(e)} autoComplete="off"/>
                <div className="register_form_placeholder" ref={razonSocialRef}>
                    <BiUser/>
                    <label htmlFor="razonSocial">Razón Social</label>
                </div>
                <input type="text" className="register_form_input" name="razonSocial" id="razonSocial" onChange={(e) => onChange(e)} autoComplete="off"/>

                <div className="register_form_placeholder" ref={nombreApellidoContactoRef}>
                    <BiUser/>
                    <label htmlFor="nombreApellidoContacto">Nombre Contacto</label>
                </div>
                <input type="text" className="register_form_input" name="nombreApellidoContacto" id="nombreApellidoContacto" onChange={(e) => onChange(e)} autoComplete="off"/>

                <div className="register_form_placeholder" ref={telefonoContactoRef}>
                    <BiUser/>
                    <label htmlFor="nombreApellidoContacto">Telefono Contacto</label>
                </div>
                <input type="text" className="register_form_input" name="telefonoContacto" id="telefonoContacto" onChange={(e) => onChange(e)} autoComplete="off"/>


                <div className="register_form_placeholder" ref={whatsappContactoRef}>
                    <BiUser/>
                    <label htmlFor="whatsappContacto">Whatsapp Contacto</label>
                </div>
                <input type="text" className="register_form_input" name="whatsappContacto" id="whatsappContacto" onChange={(e) => onChange(e)} autoComplete="off"/>


                <div className="register_form_placeholder" ref={direccionRef}>
                    <BiUser/>
                    <label htmlFor="direccion">Dirección</label>
                </div>
                <input type="text" className="register_form_input" name="direccion" id="direccion" onChange={(e) => onChange(e)} autoComplete="off"/>

                <div className="register_form_placeholder" ref={provinciaRef}>
                    <BiUser/>
                    <label htmlFor="provincia">Provincia</label>
                </div>
                <input type="text" className="register_form_input" name="provincia" id="provincia" onChange={(e) => onChange(e)} autoComplete="off"/>

                <div className="register_form_placeholder" ref={ciudadRef}>
                    <BiUser/>
                    <label htmlFor="ciudad">Ciudad</label>
                </div>
                <input type="text" className="register_form_input" name="ciudad" id="ciudad" onChange={(e) => onChange(e)} autoComplete="off"/>

                <span className="register_form_link">¿Ya tienes una cuenta?<Link to="/"><a>Inicia Sesión</a></Link></span>
                <input type="submit" value="Registrarse" className="register_form_submit"/>
            </form>
        </section>
    )
}


export default Register;