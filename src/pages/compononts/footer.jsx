import "./footer.css"
import github from "../../assets/icons8-github-32.png"
import instagram from "../../assets/icons8-instagram-32.png"
import linkedin from "../../assets/icons8-linkedin-48.png"
const Footer = () =>{
    return(
        <>
            <div className="footer-section">
                <h1>Vasanth Kumar</h1>
                <div className="social-medias">
                    <div className="media"><img src={github} alt="" /></div>
                    <div className="media"><img src={linkedin} alt="" /></div>
                    <div className="media"><img src={instagram} alt="" /></div>
                </div>
                <h3>&copy; 2025 all rights reserved </h3>
            </div>
        </>
    )
}
export default Footer