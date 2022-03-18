import React from 'react';
import { MeetupItem } from './MeetupItem';
export const MeetupList = ({ meetups }) => {
    return (
        <>
            {
                meetups.map(meetup => <MeetupItem meetup={meetup} id={meetup.id} key={meetup.id} />)
            }
        </>

    )
}
