import "./skills.css"
import html from "../../assets/skills/html.png"
import css from "../../assets/skills/css.png"
import js from "../../assets/skills/javascript.png"
import bs from "../../assets/skills/bootstrap.png"
import reactjs from "../../assets/skills/react-js.png"
import nodejs from "../../assets/skills/nodejs.png"
import expressjs from "../../assets/skills/express-js.png"
import mysql from "../../assets/skills/mysql.png"
import mongodb from "../../assets/skills/mongo-db.png"
import java from "../../assets/skills/java.png"
import springboot from "../../assets/skills/spring-boot.png"
const Skills = () => {
    return (
        <>
            <div id="skills" className="skills-tittle">
                <h1 className="tittle">Skills</h1>
            </div>
            <div className="skill-section">
                <div className="skills">
                    <div className="skill">
                        <div>
                            <img src={html} alt="" />
                        </div>
                        <h5>Html</h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={css} alt="" />
                        </div>
                        <h5>Css </h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={js} alt="" />
                        </div>
                        <h5>Javscript</h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={bs} alt="" />
                        </div>
                        <h5>Bootsrap</h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={reactjs} alt="" />
                        </div>
                        <h5>React.Js</h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={nodejs} alt="" />
                        </div>
                        <h5>Node.js</h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={expressjs} alt="" />
                        </div>
                        <h5>Express.js</h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={mysql} alt="" />
                        </div>
                        <h5>MySQL</h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={mongodb} alt="" />
                        </div>
                        <h5>Mongo DB</h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={java} alt="" />
                        </div>
                        <h5>Java</h5>
                    </div>
                    <div className="skill">
                        <div>
                            <img src={springboot} alt="" />
                        </div>
                        <h5>Springboot</h5>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Skills