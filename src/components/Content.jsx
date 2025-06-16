import React from 'react'
import '../css/Content.css'

import { useParams } from 'react-router-dom'

const Content = () => {

  const data = [
    {
      title: "AI Connect 4 Game",
      img: ["/c4.png", "/c41.png", "/c42.png"],
      desc: "Connect 4 game with minimax AI",
      link: "c4",
      info1: "This is a connect 4 game made using Python pygame. The game is played between a player and an AI. The AI uses the minimax algorithnm with alpha-beta pruning to make the best possible move",
      info2: "",
      info3: "",
      github: "https://github.com/yabgzichien/faceattendance",
    },

    {
      title: "Face ID Detection System",
      img: ["/fcid.png", "/fcid1.png", "/fcid2.png"],
      desc: "Face Detection System for Attendance",
      link: "faceid",
      info1: "This is a face id attendance system made using python, this project uses a third party library call face-attendance",
      info2: "This app will detect user login and authenticate user using face id.",
      info3: "",
      github: "https://github.com/yabgzichien/faceattendance",
    },
    {
      title: "Kitchen Delight",
      img: ["/kd.png", "/kd1.png", "/kd2.png", "/kd3.png", "/kitchendelight.png"],
      desc: "Meal Planner with React",
      link: "kd",
      info1: "Kitchen Delight is an app that provides users with food recipes and video tutorials on how to prepare a dish. Users can add the ingredients needed for the food to their cart and purchase the ingredients.",
      info2: "Kitchen Delight is a full-stack website with working user authentic. All of the data is stored in the Firebase backend and the frontend is made using Reactjs framework. The mobile app is made using React Native.",
      info3: "",
      tech: ["Reactjs", "React Native", "Firebase"],
      web: "https://jazzy-otter-204181.netlify.app/",
      github: "https://github.com/yabgzichien/meal-plan",
    },

    {
      title: "Space Game",
      img: ["/spacegame.png", "/sg.png", "/sg1.png", "/sg2.png"],
      desc: "Space Game with Python",
      link: "sg",
      info1: "The game is simple, you get to choose which spaceship skin you want at the main menu, and you press P to start playing the game. The objective is to get as many scores as possible, as the level gets higher, the difficulty gets progressively harder. There are powerups, when you pick up the hearts, the spaceship regenerates health, and when the lightning powerups are picked up, the spaceship is able to shoot multiple bullets at once.",
      info2: "Players can use WASD key to move around and the spacebar to shoot bullets. Players should avoid the falling rocks avoid getting shot by the UFOs and avoid getting the UFO over the border.",
      tech: ["Python", "Pygame"],
      web: "https://yangboi.itch.io/space-game-with-rock",
      github: "https://github.com/yabgzichien/spacegame",
    },

    {
      title: "SocketIO Chat App",
      img: ["/socketiochat.png"],
      desc: "Chat app with Nodejs SocketIO",
      link: "sio",
      info1: "This is a real-time chat app. To chat with other users, you first need to choose a profile picture and enter a username. After that, you can create or join a room by entering the room id. When users enter the same id they will be put into the same room and are able to start sending messages to each other. This is done using nodejs socketio networking.",
      tech: ["Nodejs", "SocketIO", "Expressjs"],
      web: "https://socketiochatapp-q31v.onrender.com",
      github: "https://github.com/yabgzichien/socketiochat",
      img2: "/sc0.png",
      img3:"/sc.png",
      img4: "/sc1.png",

    },

    {
      title: "Video Chat App",
      img: ["/videochat.png"],
      desc: "Video Chat App with NodeJS SocketIO",
      link: "vc",
      info1: "This is a video chatting app, to use the app, users need to enter their preferred username. After doing so, users can tell their friend to send them their user ID or copy their own user id and send it to their friend.  Then, paste the id into the input box and click call.",
      tech: ["Nodejs", "SocketIO", "Expressjs"],
      github: "https://github.com/yabgzichien/peertopeer",
      web: "https://gifted-bardeen-8ed3aa.netlify.app/",
    },

  ]

  const { params } = useParams()

  const  index = data.findIndex(e=>( e.link == params ))

  const obj = data[index]

  return (
    <div className='contentContainer'>

        <h1>{obj.title}</h1>
        <div className='contentImgContainer'>

          {   
              obj.img.map((image, index) => (
                <img key={index} src={image} className='contentImg' />
              ))
            
          }
        </div>
        <p className='contentDesc'>
            {obj?.info1}
        </p>

        <p className='contentDesc'>
            {obj?.info2}
        </p>

        <p className='contentDesc'>
            {obj?.info3}
        </p>
        {
          obj?.web ? <a className='contentLink' href={obj.web} target='_blank'>Click to visit the Website</a > :
          null
        }
        {
          obj.link == "kd" ? 
            <a className='contentLink' href='https://github.com/yabgzichien/meal-plan-mobile'>
              <p>Mobile GitHub Source Code</p> 
            </a>
          : null
        }
        {
          obj?.github ?
        <a className='contentLink' href={obj.github}>
            <p>GitHub Source Code</p> 
        </a> : null
        }

    </div>
  )
}

export default Content