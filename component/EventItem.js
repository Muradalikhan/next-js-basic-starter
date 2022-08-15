import Link from 'next/link'
import React from 'react'

const EventItem = (props) => {
    const {title,image,date,location,id}=props

    const formatedDate=new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:"long",
        year:"numeric"
    })
    const formatedAddress=location.replace(', ','\n')
  return (
    <li>
        <img src='' alt='' />
        <div>
            <div> 
                <h2>{title}</h2>
                <div>
                    <time>{formatedDate}</time>
                </div>
                <div>
                    <address>{formatedAddress}</address>
                </div>
            </div>
            <div>
                <Link href="">Explore Event</Link>
            </div>
        </div>
    </li>
  )
}

export default EventItem