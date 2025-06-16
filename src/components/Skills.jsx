import React from 'react'
import Card from './Card'

const Skills = () => {

    const data = [
        {
            img: "./skills/js.png",
            title: "Javascript",
        },
        {
            img: "./skills/html.png",
            title: "HTML",
        },
        {
            img: "./skills/css.png",
            title: "CSS",
        },
        {
            img: "./skills/rjs.png",
            title: "ReactJS",
        },
        {
            img: "./skills/rn.png",
            title: "React Native",
        },
        {
            img: "./skills/nodejs.jpg",
            title: "NodeJS",
        },
        {
            img: "./skills/firebase.png",
            title: "Firebase",
        },
        {
            img: "./skills/mysql.png",
            title: "MySQL",
        },
        {
            img: "./skills/python.png",
            title: "Python",
        },
        {
            img: "./skills/tsflw.png",
            title: "TensorFlow",
        },
        {
            img: "./skills/npy.png",
            title: "Numpy",
        },
        {
            img: "./skills/pandas.png",
            title: "Pandas",
        },
        {
            img: "./skills/pyg.png",
            title: "Pygame",
        },
        {
            img: "./skills/cpp.png",
            title: "C++",
        },
        {
            img: "./skills/cs.png",
            title: "C#",
        },

    ]


  return (
       <div className='abtContainer'>
        <h1 className='abtTitle'>Skills</h1>
        <div className='cardsContainer'>  
          {data.map(d=>(
            <Card title={d.title} img={d.img} desc={""} link="" />
          ))}
        </div>

    </div>
  )
}

export default Skills