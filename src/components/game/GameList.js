import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import './game.css'


export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by user ID {game.gamer.id}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">This is a {game.game_type.label}</div>
                        <div className="game__skillLevel">This is a {game.description}</div>
                    </section>
                })
            }
        </article>
    )
}