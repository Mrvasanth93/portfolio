import { useState } from "react"
import "./contact.css"
import { useState } from 'react';

const Contact = () => {
    return (
        <>
            <div id="contact" className="contact-tittle">
                <h1 className="tittle">Contact</h1>
            </div>
            <div className="contact">
                <div className="contact-form">
                    <div><h6>Name</h6></div>
                    <div className="name"><input placeholder="Vasanth" type="text" /></div>
                    <div><h6>Name</h6></div>
                    <div className="email"><input type="email" placeholder="abc@gmail.com"/></div>
                    <div><h6>Name</h6></div>
                    <div className="message"><textarea type="text" placeholder="write something"/></div>
                    <div className="btn"><h6><a target="_blank" href="mailto:mrvasanth93@gmail.com?subject=hellovasanth&body=hellovasanthpleasecontacstme">Contact</a></h6></div>
                </div>
            </div>
        </>
    )
}
export default Contact
