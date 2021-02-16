import React, { useContext, useState, useEffect } from "react"
import DateTimePicker from 'react-datetime-picker';
import { useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider.js"
import { EventContext } from "./EventProvider.js"



export const EventForm = () => {
    const history = useHistory()
    const [date, setDate] = useState(new Date())

    const { createGame, getGameTypes, gameTypes, getGames, games } = useContext(GameContext)
    const { createEvent, getEvents } = useContext(EventContext)

    
    const [currentEvent, setEvent] = useState({
        event_time: "",
        game: "",
        location: "",
        scheduler: ""
    })

    useEffect(() => {
        // Get all existing games from API
        
        getEvents()
        getGames()
    }, [])
    
    
    const changeEventState = (domEvent) => {
        // ...
        const newEventState = Object.assign({}, currentEvent)
        newEventState[domEvent.target.name] = domEvent.target.value
        setEvent(newEventState)
    }

    

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameTypeId">Game Type: </label>
                    <select name="game" className="form-control"

                        onChange={changeEventState}>

                        <option value="0">Select a game type</option>
                        {games.map(t => (
                            <option key={t.id} value={t.id}>
                                {t.title}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                        <div>
                <DateTimePicker
                    name="event_time"
                    onChange={setDate}
                    value={date}
                />
                </div>
            </fieldset>

            {/* Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // Create the event
                    const event = {
                        event_time: date,
                        gameId: currentEvent.game,
                        location: currentEvent.location,
                        scheduler: currentEvent.scheduluer
                    }

                    // Once event is created, redirect user to event list
                    createEvent(event)
                    .then(() => history.push("/events"))
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}