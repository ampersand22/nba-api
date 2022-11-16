import {useEffect, useState, useMemo } from 'react'
import { Box } from '@chakra-ui/react'
import Nba from './Nba'
import axios from 'axios'

const Team = ({team, isActive, fetch }) => {
    const [teamPlayers, setTeamPlayers] = useState([])
    const [teamValue, setTeamValue] = useState(null)

    const fetchTeamData = async () => {
        const resp = await axios.get(`https://www.balldontlie.io/api/v1/players`).catch((error) => {
            console.error(error)
        });
        setTeamPlayers(resp.data.data);
        
    }
    
    
    useEffect(() => {
        fetchTeamData();
    }, []);

    const filterTeamPlayers = useMemo(() => {
        if (teamValue) {
            const searchInputLower = teamValue.toLowerCase()
            const result = teamPlayers.filter((player) => {
            return player.last_name.toLowerCase().match(searchInputLower) || player.first_name.toLowerCase().match(searchInputLower)
        })
        return result
        }
        return teamPlayers
      }, [teamPlayers, teamValue])

  return (
    <Box>
        <p>
            {team.full_name}
        </p>
        {isActive && (
                <div>
                    <p>
                        
                    </p>
                </div>
            )}
    </Box>
  )
}

export default Team
