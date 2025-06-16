import React from 'react'
import '../css/About.css'
import Card from './Card'


const About = () => {

  const data = [

    {
      title: "Kitchen Delight",
      img: "./kitchendelight.png",
      desc: "Meal Planner with React",
      link: "kd"
    },

    {
      title: "Space Game",
      img: "./spacegame.png",
      desc: "Space Game with Python",
      link: "sg"
    },

    {
      title: "SocketIO Chat App",
      img: "./socketiochat.png",
      desc: "Chat app with Nodejs",
      link: "sio"
    },

    {
      title: "Video Chat App",
      img: "./videochat.png",
      desc: "Video Chat App with NodeJS",
      link: "vc"
    },
    {
      title: "Face Recognition System",
      img: "./fcid.png",
      desc: "Face Detection System",
      link: "faceid"
    },
    {
      title: "AI Connect 4 Game",
      img: "./c4.png",
      desc: "Connect 4 Game with minimax AI",
      link: "c4"
    },

  ]


  return (
    <div className='abtContainer'>
      <div>
        <h1 className='abtTitle'>Projects</h1>
        
      </div>
        
        <div className='cardsContainer'>  
          {data.map(d=>(
            <Card title={d.title} img={d.img} desc={d.desc} link={d.link} />
          ))}
        </div>

    </div>
  )
}

export default About