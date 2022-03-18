import React, { useRef } from 'react'
import { Card } from '../ui/Card'
import './MeetupForm.css'
import  {useLocation}  from 'react-router-dom'
export const MeetupForm = ({ addMeetup }) => {
    const titleRf = useRef("");
    const addressRf = useRef("");
    const imageRf = useRef("");
    const descRf = useRef("");
    const addBtnHandler = (event) => {
        event.preventDefault()
        const title = titleRf.current.value;
        const address = addressRf.current.value;
        const image = imageRf.current.value;
        const desc = descRf.current.value;
        console.log(title);
        console.log(address);
        addMeetup({ "title": title, "address": address, "image": image, "description": desc })
    }

    return (
        <Card>
            <form>
                <div>
                    <input type="text" ref={titleRf} placeholder='Enter Meetup Title' />
                </div>
                <br />
                <div>

                    <input type="text" ref={addressRf} placeholder='Enter Meetup address' />
                </div>
                <br />
                <div>
                    <input type="url" ref={imageRf} placeholder='Enter Meetup image url' />
                </div>
                <br />
                <div>

                    <input type="text" ref={descRf} placeholder='Enter Meetup  description' />
                </div>
                <br />
                <div>
                    <button onClick={addBtnHandler}>Save</button>
                </div>
            </form>


        </Card>

    )
}
