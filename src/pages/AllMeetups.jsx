import React, { useEffect, useState } from 'react'
import { MeetupList } from '../meetups/MeetupList'

export const AllMeetups = () => {

  const [meetups, setMeetups] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://mymeetup-62c2b-default-rtdb.firebaseio.com/meetup.json")
      .then(x => x.json())
      .then(data => {
        let meetups_data = []
        Object.keys(data).forEach(key => {
          let obj = {
            id: key,
            ...data[key]
          }
          meetups_data.push(obj)
        });
        setMeetups(meetups_data)
        setLoading(false)
      })
  }, [])

if(loading){
  return (<p>Loading...................................................</p>)
}

  return (
    <>

      <MeetupList  meetups={meetups} />
    </>
  )
}
