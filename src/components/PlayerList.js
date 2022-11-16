import React from 'react'
import Table from 'react-bootstrap/Table'
import { Box } from '@chakra-ui/react'
import './PlayerList.css'

export default function PlayerList (props) {
  return (
    <Box w='70em'>
        <h2>Player List</h2>
        <Table striped hover variant='dark' className="player-table">
            <thead>
                <tr>
                <th>id</th>
                <th>name</th>
                <th>team</th>
            </tr>
        </thead>
        <tbody>
            {props.players?.map((player) => (
            <tr key={player.id} onClick={() => props.handlePlayerClick(player.id)}>
                <td>{player.id}</td>
                <td>{`${player.first_name} ${player.last_name}`}</td>
                <td>{player.team.abbreviation}</td>
            </tr>
            ))}
        </tbody>
        </Table>
    </Box>
  )
}

