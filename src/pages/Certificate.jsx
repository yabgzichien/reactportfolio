import React from 'react'
import Navbar from '../components/Navbar'
import '../css/Certificate.css'

import { useParams } from 'react-router-dom'

const Certificate = () => {

    const { params } = useParams()

    const certificates = [
        {
            title: "Udemy Machine Learning Course",
            img: "/udemy.jpg",
            link: "udemy"
        },
        {
            title: "Goldsman Sachs Excel Skills For Business",
            img: "/gsforage.png",
            link: "gsforage"
        },
        {
            title: "UEC Certificate",
            img: "/uec.jpg",
            link: "uec"
        },
        {
            title: "SPM Certificate",
            img: "/spm.jpg",
            link: "spm",
            desc: "This is the Malaysian High School SPM Certificate, I could do better than this, I regretted for not studying harder."
        },
        {
            title: "MCC Bronze Certificate",
            img: "/mcc.jpg",
            link:"mcc",
            desc: "This is the Malaysian Computing Challenge(MCC) Certificate I was quite happy for getting a bronze medal. I compete in this competition when I was at Senior two"
        },
        {
            title: "Raffles Python Coding Challenge",
            img: "/rafflespython.jpg",
            link: "pcc"
        },
        {
            title: "MIA Challenge",
            img: "/mia.png",
            link: "mia"
        },
        {
            title: "Sunway Business Innovation Challenge",
            img: "/sbic.jpg",
            link: "sbic"
        },
        {
            title: "HinHua High School Charity Fair",
            img: "/schoolfair.jpg",
            link: "hhhsfair"
        },
        {
            title: "STEM Cube Open Kuala Lumpur",
            img: "/cube1.jpg",
            link: "cubekl"
        },
        {
            title: "Beaconhouse Malaysia Cube Open",
            img: "/cube2.jpg",
            link:"cubebeacon"
        },
        {
            title: "USM Penang Cube Open",
            img: "/cube3.jpg",
            link: "cubeusm"
        },
        {
            title: "HinHua HighSchool Graduation Certificate",
            img: "/graduation.jpg",
            link: "graduation"
        },

    ]

    const index = certificates.findIndex(e=>(
        e.link == params
    ))
    
    const obj = certificates[index]

  return (
    <>
        <Navbar /> 
        <div className='certificateContainer'>
            <h1>{obj.title}</h1>
            
            <img className='certificatesImg' src={obj.img} />
            <p style={{margin:20}}>{obj.desc}</p>
        </div>
    </>
  )
}

export default Certificate