import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])
    const [ gameTypes, setTypes ] = useState([])

    console.log("This is props", props)
    console.log("This is gameTypes",gameTypes)

    
    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(response => response.json())
        .then(setGames)
    }
    
    const createGame = (game) => {
        return fetch(`http://localhost:8000/games`, { 
        method: "POST",    
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }, body: JSON.stringify(game)
    })
        .then(setGames)
        
    }
    
    const getGameTypes = () => {
        
        return fetch("http://localhost:8000/gametypes", { headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        } })
        
            .then(response => response.json())
            .then(setTypes)
    }

    return (
        <GameContext.Provider value={{ games, gameTypes, createGame, getGameTypes, getGames }} >
            { props.children }
        </GameContext.Provider>
    )
}