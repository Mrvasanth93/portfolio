import "./home.css"
import profileBanner from "../../assets/profile.png"
import github from "../../assets/icons8-github-32.png"
import instagram from "../../assets/icons8-instagram-32.png"
import linkedin from "../../assets/icons8-linkedin-48.png"
const Home = () =>{
    return(
        <>
            <div className="home">
                <div className="left-or-top">
                    <h1>Hi,</h1>
                    <h1>I am <span>Vasanth</span></h1>
                    <h1>Web Designer</h1>
                </div>
                <div className="right-or-bottom">
                    <div className="profile-img">
                        <img className="proflile-banner" src={profileBanner} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer">
                    <div className="social-medias">
                        <div className="icons"><img src={github} alt="" /></div>
                        <div className="icons"><img src={instagram} alt="" /></div>
                        <div className="icons"><img src={linkedin} alt="" /></div>
                    </div>
            </div>
        </>
    )
}
export default Home