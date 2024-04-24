import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './index-media.css'
import icon from './science.png'
import py from './img/python.png'
import html from './img/html.png'
import css from './img/css-3.png'
import git from './img/git.png'
import js from './img/js.png'
import react from './img/physics.png'
import menu from './img/text.png'



const skillData = [
  {
    photoName: py,
    name: "Python",
    details: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation It defines the content",
    projects: 3,
    percentage: 10,
  },
  {
    photoName: html,
    name: "HTML",
    details: "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure.",
    projects: 18,
    percentage: 99,
  },
  {
    photoName: css,
    name: "CSS",
    details: "Cascading Style Sheets (CSS) — a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML",
    projects: 18,
    percentage: 85,
  },
  {
    photoName: git,
    name: "Git",
    details: "Cascading Style Sheets (CSS) — a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML",
    projects: 18,
    percentage: 70,
  },
  {
    photoName: js,
    name: "Javascript",
    details: "Cascading Style Sheets (CSS) — a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML",
    projects: 10,
    percentage: 25,
  },
  {
    photoName: react,
    name: "React",
    details: "Cascading Style Sheets (CSS) — a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML",
    projects: 1,
    percentage: 5,
  },
]

function App(){
  return(
    <div>
      <Header />
      <Hero />
      <SkillMenu />
    </div>
  )
}

function Header(){
  return(
    <div className='header'>
      <div className='logo'><span>React</span>  App</div>
      <ul className='navbar'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <img className='menu' src={menu} alt='menu' />
    </div>
  )
}
function Hero(){
  return(
    <div className='hero'>
      <div className='hero-text'>
        <h1>This Is My First <span>React</span>  Web-site</h1>
        <p className='para'>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link. but still need the element to resemble a link.</p>
        <button>learn more</button>
      </div>
      <img className='hero-img' src={icon} alt='react icon'/>
    </div>
  )
}
function SkillMenu(){
  return(
    <div className='skill-menu'>
      <h2>My Skills</h2>
      <div className='skills'> 
          {skillData.map(skill => (
              <Skill skillObj={skill} key={skill.name}/>   
          ))}
      </div>
    </div>
  )
}

function Skill(props){
  return(
    <div className='skill-item'>
        <img src={props.skillObj.photoName} alt={props.skillObj.name} />
        <h3 className='lang-name'>{props.skillObj.name}</h3>
        <p className='para-skill'>{props.skillObj.details}</p>
        <span>Projects: {props.skillObj.projects}</span>
        <h4>Knowledge: {props.skillObj.percentage} - %</h4>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
