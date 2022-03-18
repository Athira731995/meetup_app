import React from 'react'
import { useContext } from 'react'
import { MeetupList } from '../meetups/MeetupList'
import { FavoriteContext } from '../store/FavoriteContextProvider'

export const Favorites = () => {
 let context= useContext(FavoriteContext)
  return (
    <MeetupList meetups={context.favorites}/>
  )
}
