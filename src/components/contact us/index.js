import React from 'react'
import './index.css';

export default function index() {
    return (
        <div className='contactus-div'>
            <h2>Contact us</h2> 
            <div className='contactus-form'>
                <form action="/action_page.php">
                    <label for="fname">First name : </label>
                    <input type="text" id="fname" placeholder='Full Name here' /><br></br >
                    <label for="fname">Email : </label>
                    <input type="email" id="femail : " placeholder='Email here' /><br></br >
                    <label for="fname">Describe </label>
                    <input type="text" id="Write here : " placeholder='message here' /><br></br >
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}
