import React from 'react'
import '../css/Content.css'

import { useParams } from 'react-router-dom'

const Content = () => {

  const data = [
    {
      title: "Kitchen Delight",
      img: "/kd.png",
      img2: "/kd2.png",
      img3: "/kd3.png",
      img4: "/kitchendelight.png",
      desc: "Meal Planner with React",
      link: "kd",
      info1: "Kitchen Delight is an app that provides users with food recipes and video tutorials on how to prepare a dish. Users can add the ingredients needed for the food to their cart and purchase the ingredients.",
      info2: "Kitchen Delight is a full-stack website with working log-in and log-out functions. All of the data is stored in the Firebase backend and the frontend is made using Reactjs framework. The mobile app is made using React Native. Kitchen Delight was made for a business studies project assignment.",
      info3: "",
      web: "https://jazzy-otter-204181.netlify.app/",
      github: "https://github.com/yabgzichien/meal-plan",
    },

    {
      title: "Space Game",
      img: "/spacegame.png",
      img2: "/sg.png",
      img3: "/sg1.png",
      img4: "/sg2.png",
      desc: "Space Game with Python",
      link: "sg",
      info1: "Space Game is one of my earliest projects. Therefore, the code is messy.",
      info2: "The game is simple, you get to choose which spaceship skin you want at the main menu, and you press P to start playing the game. The objective is to get as many scores as possible, as the level gets higher, the difficulty gets progressively harder. There are powerups, when you pick up the hearts, the spaceship regenerates health, and when the lightning powerups are picked up, the spaceship is able to shoot multiple bullets at once.",
      info3: "Players can use WASD key to move around and the spacebar to shoot bullets. Players should avoid the falling rocks avoid getting shot by the UFOs and avoid getting the UFO over the border.",
      web: "https://yangboi.itch.io/space-game-with-rock",
      github: "https://github.com/yabgzichien/spacegame",
    },

    {
      title: "SocketIO Chat App",
      img: "/socketiochat.png",
      desc: "Chat app with Nodejs SocketIO",
      link: "sio",
      info: "This is a real-time chat app. To chat with other users, you first need to choose a profile picture and enter a username. After that, you can create or join a room by entering the room id. When users enter the same id they will be put into the same room and are able to start sending messages to each other. This is done using nodejs socketio networking.",
      web: "https://socketiochatapp-q31v.onrender.com",
      github: "https://github.com/yabgzichien/socketiochat",
      img2: "/sc0.png",
      img3:"/sc.png",
      img4: "/sc1.png",

    },

    {
      title: "Video Chat App",
      img: "/videochat.png",
      desc: "Video Chat App with NodeJS SocketIO",
      link: "vc",
      info: "This is a video chatting app, to use the app, users need to enter their preferred username. After doing so, users can tell their friend to send them their user ID or copy their own user id and send it to their friend.  Then, paste the id into the input box and click call.",
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
          <img src={obj.img} className='contentImg' />
          {
            obj.link == "vc" ? null :
            <>
              <img src={obj?.img2} className='contentImg' />
              <img src={obj?.img3} className='contentImg' />
              <img src={obj?.img4} className='contentImg' />
            </>
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
        <a className='contentLink' href={obj.github}>
            <p>GitHub Source Code</p> 
        </a>

    </div>
  )
}

export default Content