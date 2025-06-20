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
      desc: "Chat app with Nodejs SocketIO",
      link: "sio"
    },

    {
      title: "Video Chat App",
      img: "./videochat.png",
      desc: "Video Chat App with NodeJS SocketIO",
      link: "vc"
    },
    {
      title: "Face Recognition System",
      img: "./faceid.jpg",
      desc: "Face Detection System",
      link: "faceid"
    },
    {
      title: "AI Connect 4 Game",
      img: "./kitchendelight.png",
      desc: "Meal Planner with React",
      link: "c4"
    },

  ]


  return (
    <div className='abtContainer'>
      <div>
        <h1 className='abtTitle'>About Myself</h1>
        <p style={{marginTop: 20}}> Greetings! If, by any chance, you’re looking for the one with passion and will, do make sure you reach the end of this.</p>
        <p style={{marginTop: 20}}>Before anything else, here’s a little bit about myself. My name is Yang Zi Chien（杨谨铨）. I was born on 10th March 2005, currently a 20-year-old currently persuing a degree in Data Science in Xiamen University Malaysia. In my highschool year, I studied in the business stream before I took a fancy to computer programming because, other than STEM fields knowledge, I am also interested in studying business and espeically in the world of Finance and Economics. </p>
        <p style={{marginTop: 20}}>I’m a passionate yet amateur computer programmer, always ready to learn more about the field and hopefully, on its cutting edge.  This strong passion for computer programming has developed during the pandemic, it was then that I started self-teaching computer programming through online courses/ videos/ etc. As followed are some of the works that I created through self-teaching: a full-stack website with Reactjs as frontend and Firebase as backend and mobile apps with React Native. I’ve also learned a little about game development with C# Unity and Python Pygame Library.</p>

        <p style={{marginTop: 20}}>Though my passion for computer programming formed late, Mathematics, on the other hand, has always been my favourite subject. I love dealing with numbers and solving problems, which, I believe, adds to my suitability to major in Data Science. Over the course of time, I’d love to analyse data and solve real-world problems. </p>
        <p style={{marginTop: 20}}>This is the reason why I chose to major in Data Science. :)</p>

        
      </div>
        
        {/* <div className='cardsContainer'>  
          {data.map(d=>(
            <Card title={d.title} img={d.img} desc={d.desc} link={d.link} />
          ))}
        </div> */}

    </div>
  )
}

export default About