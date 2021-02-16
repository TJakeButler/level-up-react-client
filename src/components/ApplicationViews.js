import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventList } from "./game/EventList.js"
import { EventProvider } from "./game/EventProvider.js"
import { GameForm } from "./game/GameForm.js"
import { EventForm } from "./game/EventForm.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}> 
            <GameProvider>
                <Route exact path="/" render={(props) => {
                    return <GameList {...props} />
                }}>
                    
                </Route>
            </GameProvider>

            
            
            <EventProvider>
                <Route exact path="/events" render={(props)=> {
                    return <EventList {...props} />
                }}>
                    
                </Route>

            </EventProvider>

            <GameProvider>
            <EventProvider> 
            <Route exact path="/games/new" render={(props) => {
                return <GameForm {...props} />
            }}>
                
            </Route>
            </EventProvider>
            </GameProvider>

            <GameProvider>
            <EventProvider> 
            <Route exact path="/events/new" render={(props) => {
                return <EventForm {...props} />
            }}>
                
            </Route>
            </EventProvider>
            </GameProvider>
        </main>
    </>
}