import { useState } from "react"
import "./contact.css"
const Contact = () => {
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [message,setMessage] = useState("")
    const handleIsValid = (e)=>{
        e.prevenDefault()
        if(name == ""){
            alert("Please enter your name")
        }
        else{
            if(mail == ""){
                alert("please enter your mail id")
            }
            else{
                if(mail.endsWith("@gmail.com")){
                    if(message == ""){
                        alert("message is required")
                    }
                    else{
                        return <>
                        <a target="_blank" href=""></a>
                        </>
                    }
                }
                else{
                    alert("Enter a valid mail addres")
                }
            }
        }
    }
    return (
        <>
            <div id="contact" className="contact-tittle">
                <h1 className="tittle">Contact</h1>
            </div>
            <div className="contact">
                <div className="contact-form">
                    <div><h6>Name</h6></div>
                    <div className="name"><input onChange={(e)=>{setName(e.target.value)}} placeholder="Vasanth" type="text" /></div>
                    <div><h6>Name</h6></div>
                    <div className="email"><input onChange={(e)=>{setMail(e.target.value)}} type="email" placeholder="abc@gmail.com"/></div>
                    <div><h6>Name</h6></div>
                    <div className="message"><textarea onChange={(e)=>{setMessage(e.target.value)}} type="text" placeholder="write something"/></div>
                    <div className="btn"><h6><a onClick={(e)=>{handleIsValid(e)}} >Contact</a></h6></div>
                </div>
            </div>
        </>
    )
}
export default Contact