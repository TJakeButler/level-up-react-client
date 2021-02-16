import React, { useContext, useEffect } from "react"
import {useHistory} from 'react-router-dom'
import { EventContext } from "./EventProvider.js"
import './event.css'

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
                <button className="btn btn-2 btn-sep icon-create"
    onClick={() => {
        props.history.push({ pathname: "/events/new" })
    }}
>Register New Event</button>
            </header>
            {
                events.map(event => {
                    
                    return <section key={event.id} className="event">
                        <div className="event__game">The game played will be {event.game.title}</div>
                        <div className="event_location">At {event.location}</div>
                        <div> Date and time will be: 
                            {
                                new Date(event.event_time).toLocaleDateString("en-US",
                                {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                                
                            }
                        </div>
                    </section>
                })
            }
        </article >
    )
}