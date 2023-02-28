import { 
    DiHtml5, 
    DiCss3, 
    DiSass, 
    DiJsBadge, 
    DiReact, 
    DiPython, 
    DiJava,  
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5 /> },
    {id: "css3", name: "CSS3", icon: <DiCss3 /> },
    {id: "sass", name: "SASS", icon: <DiSass />},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />},
    {id: "react", name: "React", icon: <DiReact /> },
    {id: "python", name: "Python", icon: <DiPython />},
    {id: "java", name: "Java", icon: <DiJava /> },
];

const TechnologiesContainer = () => {
    return(
        <section className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className='technologies-grid'>
                {technologies.map((tech) => (
                    <div className='technology-card' id={tech.id} key={tech.id}>
                        {tech.icon}
                        <h3>{tech.name}</h3>
                        {/* explicar o que sei sobre a tecnologia */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer;