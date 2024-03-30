import React from 'react'
import '../css/Certs.css'
import Cert from './Cert'

const Certs = () => {

    const certificates = [
        {
            title: "UEC Certificate",
            img: "./uec.jpg",
            link: "uec"
        },
        
        {
            title: "HinHua HighSchool Graduation Certificate",
            img: "./graduation.jpg",
            link: "graduation"
        },
        {
            title: "SPM Certificate",
            img: "./spm.jpg",
            link: "spm"
        },
        {
            title: "MCC Bronze Certificate",
            img: "./mcc.jpg",
            link:"mcc"
        },
        {
            title: "Raffles Python Coding Challenge",
            img: "./rafflespython.jpg",
            link: "pcc"
        },
        {
            title: "MIA Challenge",
            img: "./mia.png",
            link: "mia"
        },
        {
            title: "Sunway Business Innovation Challenge",
            img: "./sbic.jpg",
            link: "sbic"
        },
        {
            title: "HinHua High School Charity Fair",
            img: "./schoolfair.jpg",
            link: "hhhsfair"
        },
        {
            title: "STEM Cube Open Kuala Lumpur",
            img: "./cube1.jpg",
            link: "cubekl"
        },
        {
            title: "Beaconhouse Malaysia Cube Open",
            img: "./cube2.jpg",
            link:"cubebeacon"
        },
        {
            title: "USM Penang Cube Open",
            img: "./cube3.jpg",
            link: "cubeusm"
        },

    ]


  return (
    <div className='certsMainContainer'>
        <h1>Certificates</h1>
        <div className='certsContainer'>
            {certificates.map(c=>{
                return <Cert title={c.title} img={c.img} link={c.link} />
            })}
        </div>
    </div>
  )
}

export default Certs