import "./about.css"
import profile from "../../assets/0Z6A1905-copy.jpg"
const About = () => {
    return (
        <>
            <div id="about"  className="about-tittle">
                <h1 className="tittle">About</h1>
            </div>
            <div className="about">
                <div className="about-left-or-top">
                    <div className="pro-img">
                       <img src={profile} alt="" />
                    </div>
                </div>
                <div className="about-right-or-bottom">
                    <h1>I`am Vasanth</h1>
                    <p>A self-taught and passionate Full Stack Developer with expertise in both the MERN stack and Java Full Stack development. I enjoy building web applications from scratch, focusing on both frontend and backend. I have worked on projects such as social media platforms, e-commerce backends, and CRUD applications using technologies like React.js, Node.js, Express, MongoDB, Java (Spring Boot), JDBC, and MySQL. I am also familiar with UI/UX design principles and cloud basics. I am driven by a constant desire to learn and grow, and I love creating user-friendly and scalable applications that solve real-world problems.</p>
                </div>
            </div>
        </>
    )
}

export default About