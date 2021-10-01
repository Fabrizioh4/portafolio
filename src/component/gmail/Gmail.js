import React from 'react';
import './Gmail.css';
import emailjs from 'emailjs-com';
import {Link} from 'react-router-dom';


const Gmail = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xfyhyp7','template_8p5jzag',e.target,'user_HAT2WDSviLbQ0Tj19JiCs').then(res => {console.log(res)}).catch(err => {console.log(err)});
    }


    return (
        <div className="Bac">
        <div className="container border bg-black fondo text-white" >
            <h1 className="mt-25">Contact Me</h1>
            <form className="row mm" onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name="nombre" placeholder="Tu Nombre" className="form-control"/>

                <label>Email</label>
                <input type="email" name="email" placeholder="@gmail.com" className="form-control"/>

                <label>Mensaje</label>
                <textarea name="mensaje" rows="4" className="form-control" />
                <input type="submit" value="Send" className="form-control btn btn-primary mt-30" />
            </form>
        </div>
        <div>
            <Link to="/">
            <i class="fas fa-arrow-alt-circle-left back"></i>
            </Link>
        </div>
        </div>
    )
}

export default Gmail
