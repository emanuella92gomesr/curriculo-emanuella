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
    {id: "html", name: "HTML5", icon: <DiHtml5 />, knowledgement: "Linguagem de marcação, que define o significado e a estrutura do conteúdo da web." },
    {id: "css3", name: "CSS3", icon: <DiCss3 />, knowledgement: "Folha de estilos, que descreve a aparência/apresentação de uma página web." },
    {id: "sass", name: "SASS", icon: <DiSass />, knowledgement: "Linguagem utilizada como extensão para o CSS."},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />, knowledgement: "Linguagem de programação de alto nível, utilizada para definir as funcionalidades de uma página web."},
    {id: "react", name: "React", icon: <DiReact />, knowledgement: "Biblioteca escrita em JavaScript, voltada para a criação de interfaces do usuário." },
    {id: "python", name: "Python", icon: <DiPython />, knowledgement: "Linguagem de programação de alto nível, com sintaxe simplificada e que pode ser utilizada para diversas aplicações (Desde o desenvolvimento backend até ciência de dados)."},
    {id: "java", name: "Java", icon: <DiJava />, knowledgement: "Linguagem de programação de alto nível, de tipagem estática e multiplataforma." },
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
                        <p>{tech.knowledgement}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer;