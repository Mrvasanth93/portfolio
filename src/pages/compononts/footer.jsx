import "./footer.css"
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import website from "../../assets/website.png"
import whatsapp from "../../assets/whatsapp.png"
const Footer = () =>{
    return(
        <>
            <div className="footer-section">
                <h1>Vasanth Kumar</h1>
                <div className="social-medias">
                    <div className="media"><a target="_blank" href="https://wa.me/9345488130?text=hello vasanth"><img  src={whatsapp} alt="" /></a></div>
                    <div className="media"><a target="_blank" href="https://www.instagram.com/vasanth_7_8/"><img src={instagram} alt="" /></a></div>
                    <div className="media"><a target="_blank" href="https://Mrvasanth93.github.io/portfolio"><img src={website} alt="" /></a></div>
                    <div className="media"><a target="_blank" href="https://github.com/Mrvasanth93"><img src={github} alt="" /></a></div>
                    <div className="media"><a target="_blank" href="https://www.linkedin.com/in/vasanth-kumar-757598225/"><img src={linkedin} alt="" /></a></div>
                </div>
                <h3>&copy; 2025 all rights reserved </h3>
            </div>
        </>
    )
}
export default Footer