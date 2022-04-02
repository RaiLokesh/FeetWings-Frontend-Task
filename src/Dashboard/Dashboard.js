import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import parse from "html-react-parser"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [mode, setMode] = useState("")
    const [pg, setPg] = useState("")
    const dispatch = useDispatch()
    const jobs = useSelector(state=>{
        return state
    })
    function handleSubmit() {
        if (!title){
            alert('Fill atleast Title!');
        }
        else{
            console.log(text, title, desc, mode, pg);
            const data = {
                title,
                desc,
                mode,
                pg
            };
            dispatch({ type: 'ADD_DATA', payload: data })
            var localjob = JSON.parse(localStorage.getItem("data"))
            if (localjob) localjob.push(data)
            else{
                jobs.push(data)
                localjob = jobs;
            }
            localStorage.setItem("data", JSON.stringify(localjob))
            const dat = localStorage.getItem("data")
            console.log(dat)
            navigate('/jobs')
        }
    }
    
    
    return (
        <div>
            <div className='Navbarf'>
                <Navbar />
            </div>
            <div className='DashboardText'>
                <p className='dash-text'>
                    Career Dashboard
                </p>
            </div>
            <div className='inputwrapper' style={{ paddingTop: "2%" }}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className="input-elem" />
                <input input list="employmentType" style={{ fontSize: "large", float: "right", width: "30%", textAlign: "center" }} className='input-elem' placeholder='Employment type ( Option Choose )' />
                <datalist id="employmentType">
                    <option value="Full Time"></option>
                    <option value="Part Time"></option>
                    <option value="Contract"></option>
                    <option value="Temporary"></option>
                    <option value="Volunteer"></option>
                    <option value="Internship"></option>
                </datalist>
            </div>
            <div className='inputwrapper'>
                <div className='container' style={{ width: "20%" }}>
                    <input type="text" placeholder='Location' className="input-elem1" style={{ width: "60%" }} />
                </div>
                <div className='container' style={{ left: "-20px", marginLeft: "-20px" }}>
                    <input input list="employmentType1" style={{ textAlign: "center", width: "90%" }} className='input-elem1' placeholder='Job section ( Option Choose )' />
                    <datalist id="employmentType1">
                        <option value="Business Systems"></option>
                        <option value="Design"></option>
                        <option value="Engineering"></option>
                        <option value="Finance"></option>
                        <option value="Human Resources"></option>
                        <option value="Legal"></option>
                        <option value="Marketing"></option>
                        <option value="Operations"></option>
                        <option value="Product"></option>
                        <option value="Sales"></option>
                        <option value="Security"></option>
                        <option value="Support"></option>
                    </datalist>
                </div>
                <div className='container' style={{ width: "28%" }}>
                    <input input list="employmentType2" value={mode} onChange={(e) => setMode(e.target.value)} style={{ textAlign: "center", width: "85%", fontSize: "15px", marginLeft: "40px" }} className='input-elem1' placeholder='Workplace type ( Option Choose )' />
                    <datalist id="employmentType2">
                        <option value="On-site">Employees can come to work in-person.</option>
                        <option value="Hybrid">Employees work on-site and off-site.</option>
                        <option value="Remote">Employees work off-site.</option>
                    </datalist>
                </div>
                <div className='container' style={{ float: "right" }}>
                    <input input list="employmentType3" value={pg} onChange={(e) => setPg(e.target.value)} style={{ textAlign: "center", float: "right", width: "93%", paddingLeft: "2px", paddingRight: "0" }} className='input-elem1' placeholder='Paid / Gratis ( Option Choose )' />
                    <datalist id="employmentType3">
                        <option value="Paid"></option>
                        <option value="Gratis"></option>
                    </datalist>
                </div>

            </div>
            <div className='inputwrapper' style={{ paddingTop: "9%", paddingBottom: "3%" }}>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Short Description ( 150 Words )' className="input-elem" style={{ width: "96%", fontSize: "24px" }} />
            </div>
            <div className='inputwrapper2' style={{ position: "relative" }}>
                <div className="whitesection">
                    <p className='jobdesc' >
                        Add a job description
                    </p>
                    <p>Description<span style={{ color: "blue" }}> *</span></p>
                    <div className="editor">
                        <CKEditor
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}
                        />
                    </div>
                    <p>{parse(text)}</p>
                    <p className='jobdesc'>
                        Add skills
                    </p>
                    <p style={{ marginTop: "-20px " }}>
                        Add skill keywords to make your job more visible to the right candidates (Select upto 10)
                    </p>
                    <button className="btn">
                        Add Skill +
                    </button>
                </div>
            </div>
            <div className='inputwrapper' style={{ paddingTop: "1%", paddingBottom: "5%" }}>
                <button className='smt-btn' onClick={() => handleSubmit()}>
                    Submit
                </button>

            </div>
        </div>
    )
}


export default Dashboard