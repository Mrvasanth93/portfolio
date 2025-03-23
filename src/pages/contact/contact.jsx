import { useState } from "react"
import "./contact.css"

const Contact = () => {
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,SetMessage] = useState ("");
    return (
        <>
            <div id="contact" className="contact-tittle">
                <h1 className="tittle">Contact</h1>
            </div>
            <div className="contact">
                <div className="contact-form">
                    <form action="" >
                    <div><h6>Name</h6></div>
                    <div className="name"><input onChange={(e)=>{setName(e.target.value)}} placeholder="Vasanth" type="text" /></div>
                    <div><h6>Email</h6></div>
                    <div className="email"><input onChange={(e)=>{setMail(e.target.value)}} type="email" placeholder="abc@gmail.com"/></div>
                    <div><h6>Subject</h6></div>
                    <div className="email"><input onChange={(e)=>{setSubject(e.target.value)}} type="email" placeholder="subject"/></div>
                    <div><h6>Message</h6></div>
                    <div className="message"><textarea onChange={(e)=>{SetMessage(e.target.value)}} type="text" placeholder="write something"/></div>
                    <div className="btn"><h6><a target="_blank" href= {`mailto:mrvasanth93@gmail.com?subject=${subject}/${name}&body=${message}`} >Contact</a></h6></div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact
