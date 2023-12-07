import { NavLink } from "react-router-dom";
import { projects } from "../arrays/projects";
function Work() {
    let project = projects.map((elem, index)=>{
        return <NavLink to={'/project/' + index}>
            <li className="box projects__list-item" key={index}>
                <picture className="logo-pic">
                    <img src={elem.img} />
                </picture>
                <p className="p_big">{elem.title}</p>
                <p className="p_sml">{elem.description}</p>
            </li>
        </NavLink> 
    })
    return ( 
        <>
            <section className="section section-black">
                <h1 className="h_big clr-white">Work</h1>
            </section>
            <section className="section projects">
                <p className="p_sml">OUR WORKS</p>
                <h2 className="h_mid">Projects</h2>
                <ul className="grid-3fr projects__grid">{project}</ul>
            </section>
        </>
     );
}

export default Work;