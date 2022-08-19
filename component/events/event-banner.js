import React from 'react'
import Image from 'next/image'
import banner from "../../public/images/events.jpg"
import classes from './event-banner.module.css'

const EventBanner = () => {
  return (
    <div className={classes.banner}>
        <Image src="/images/events.jpg" alt="banner" width={1000} height={400} objectFit="cover"/>
    </div>
  )
}

export default EventBanner