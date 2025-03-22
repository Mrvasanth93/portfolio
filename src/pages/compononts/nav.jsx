import "./nav.css"
const Nav = () =>{
    return(
        <>
            <div className="nav">
                <div className="nav-left">
                    <div>
                        <h1>Vasanth</h1>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="link"><h5><a href="#home"><h5>Home</h5></a></h5></div>
                    <div className="link"><h5><a href="#about"><h5>About</h5></a></h5></div>
                    <div className="link"><h5><a href="#skills"><h5>skills</h5></a></h5></div>
                    <div className="link"><h5><a href="#contact"><h5>Contact</h5></a></h5></div>
                </div>
            </div>
        </>
    )
}
export default Nav;