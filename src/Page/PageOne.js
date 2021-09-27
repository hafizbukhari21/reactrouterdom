import React, { Component } from 'react'
import {useHistory} from 'react-router-dom'

export default function PageOne(){
    let history = useHistory()
    
    function HandleClick(){
        
        history.push("/page2")
    }
    return(
        <>
            <h1>Page 1</h1>
            <button
                onClick={HandleClick}
            >
                Move to Page 2 With Script command
            </button>
        </>
    )
}