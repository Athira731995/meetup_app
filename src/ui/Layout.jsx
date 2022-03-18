import React from 'react'
import {MainNavigations} from './MainNavigations'
export const Layout = (props) => {
  return (
    <>
        <MainNavigations/>
         {props.children}  
    </>
  )
}
