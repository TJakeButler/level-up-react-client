import React, { useContext, useEffect,  } from "react";
import {useHistory} from "react-router-dom"
import { GameContext } from "./GameProvider.js";
import "./game.css";

export const GameList = (props) => {
  const { games, getGames, getGameTypes } = useContext(GameContext);
  

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    getGameTypes();
  }, []);
console.log("This is games", games)
  return (
    <article className="games">
      <header>
        <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            props.history.push({ pathname: "/games/new" });
          }}
        >
          Register New Game
        </button>
      </header>
      {games.map((game) => {
        return (
          <section key={`game--${game.id}`} className="game">
            <div className="game__title">
              {game.title} by user ID {game.gamer.id}
            </div>
            <div className="game__players">
              {game.number_of_players} players needed
            </div>
            <div className="game__skillLevel">
              This is a {game.game_type.label}
            </div>
            <div className="game__skillLevel">This is a {game.description}</div>
          </section>
        );
      })}
    </article>
  );
};
