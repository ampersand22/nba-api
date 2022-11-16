import React from 'react'
import Card from 'react-bootstrap/Card';

export default function PlayerCard (props) {
  const player = props.player;
  const playerPic = `https://nba-players.herokuapp.com/players/${player.last_name}/${player.first_name}`

  console.log(player)

  return (
    <Card style={{ width: '25rem'}}>
      <Card.Img variant="top" src={playerPic} alt='player' />
      <Card.Body>
        <Card.Title>{`${player.first_name} ${player.last_name}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{player.team?.full_name}</Card.Subtitle>
        <Card.Text>
          <p style={{ fontStyle: 'italic', fontSize: '.8em' }}>*every stat is per game*</p>
          Points: {player.stats.averagePointsPerGame} <br />
          Assists: {player.stats.averageAssistsPerGame} <br />
          Rebounds: {player.stats.averageReboundsPerGame} <br />

            <br />
          {/* Average Blocks Per Game: {player.stats.averageBlocksPerGame} <br /> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
