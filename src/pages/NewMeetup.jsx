import React from 'react'
import { MeetupForm } from '../meetups/MeetupForm'

export const NewMeetup = ({ addMeetup }) => {
  return (
    <>

      <MeetupForm addMeetup={addMeetup} />

    </>
  )
}
