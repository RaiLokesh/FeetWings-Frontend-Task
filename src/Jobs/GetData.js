import React from 'react'
import './Jobs.css'

const GetData = (props) => {
    return (
        <div className='inputwrapper'>
            <p className='job-heading'>Business Systems</p>
            <div className="whitesection1">
                <div className='div1'>
                    <p style={{ fontWeight: "500", width: "70%" }}>
                        {props.title} <span style={{ fontWeight: "bold" }}>(Title)</span>
                    </p>
                    <p style={{ paddingTop: "0.1%" }}>
                        {props.desc}<span style={{fontWeight:"bold"}}>( Short Description )</span>
                    </p>
                    <p style={{fontWeight: "500"}}>
                        {props.mode}
                    </p>
                </div>
                <div className='div2'>
                    {props.pg=="Paid"?<p style={{ verticalAlign: "middle", color: "#4DFF0F", fontWeight:"500"}}>$ Paid</p>:<p style={{ verticalAlign: "middle", color: "red"}}>❤️Gratis</p>}
                </div>
            </div>
        </div>
    )
}

export default GetData