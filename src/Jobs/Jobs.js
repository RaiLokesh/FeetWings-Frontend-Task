import React from 'react'
import Navbar from '../Navbar/Navbar'
import GetData from './GetData'


const Jobs = () => {
    const jobs = JSON.parse(localStorage.getItem("data"))
    console.log(jobs)
    return (
        <div>
            <div className='Navbarf'>
                <Navbar />
            </div>
            <div>
                
                {jobs && jobs.length!=1?jobs.map((i)=>(i.title?<GetData key={i} title={i.title} desc = {i.desc} mode={i.mode} pg={i.pg}/>:<></>)):<h1 style = {{top:"40%",left:"40%", position:"fixed", display:"flex", justifyContent:"center"}}>No Data to Display!</h1>}
                
            </div>
        </div>
    )
}

export default Jobs