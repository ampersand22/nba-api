import {useState, useEffect} from 'react'
import { Box } from "@chakra-ui/react"


const Nba = ({player, isActive, team }) => {
    const playerPic = `https://nba-players.herokuapp.com/players/${player.last_name}/${player.first_name}`




    return (
        <Box className="nba-container">
            
            <p className="player-link">
                {player.first_name} {player.last_name}
            </p>
            {isActive && (
                <div>
                    <img src={playerPic} alt='player'/>
                    <p>
                        {`Team: ${player.team.abbreviation}`}
                    </p>
                </div>
            )}
        </Box>
    )
}

export default Nba