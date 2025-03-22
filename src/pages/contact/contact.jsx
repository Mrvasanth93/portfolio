import "./contact.css"
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
                </div>
            </div>
        </>
    )
}
export default Contact