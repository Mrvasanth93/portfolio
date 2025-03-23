import "./home.css"
import profile from "../../assets/0Z6A1905.jpg"
import { useEffect, useState } from 'react';
const Home = () =>{
    const roles = ["Web Designer", "Full Stack Developer", "Frontend Developer", "Backend Developer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);
    return(
        <>
            <div id="home" className="home">
                <div className="left-or-top">
                    <h1 className="h11">Hi,</h1>
                    <h1 className="h12">I am <span>Vasanth</span></h1>
                    <h1 className="h13">Full stack Developer</h1>
                </div>
                <div className="right-or-bottom">
                    <div className="profile-img">
                        <img className="proflile-banner" src={profile} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home
