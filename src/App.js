import { useState, useEffect, useMemo, useCallback } from 'react'
import './App.css';
import axios from 'axios'
import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/ui/theme';
import { Button, SaveAndCancel, Box } from './components/ui';
import Nba from './components/Nba';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import PlayerCard from './components/Card';
import SearchForm from './components/SearchForm';
import PlayerList from './components/PlayerList';



const perPage = 25;

const App = () => {

  const lebron = {
    id: 237,
    first_name: 'LeBron',
    last_name: 'James',
    team: { abbreviation: 'LAL', full_name: 'Los Angeles Lakers' },
    stats: {
      averagePointsPerGame: 24.9,
      averageReboundsPerGame: 8.8,
      averageAssistsPerGame: 6.9,
      averageBlocksPerGame: 1.0,
    },
  }


  const [name, setName] = useState('LeBron James')
  const [players, setPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState(lebron)
  const [filteredPlayers, setFilteredPlayers] = useState([lebron])
  const [allPlayers, setAllPlayers] = useState([])


  // const [playerFirstName, setPlayerFirstName] = useState("");
  // const [playerLastName, setPlayerLastName] = useState('');
  // const [playerStats, setPlayerStats] = useState({});
  // const [isSearching, setIsSearching] = useState(false);
  // const [currentPage, setCurrentPage] = useState([]);
  const [selectPlayerId, setSelectPlayerId] = useState('')
  const [searchValue, setSearchValue] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const [isActive, setIsActive] = useState(null)
  const [loading, setLoading] = useState(true)

  const [showAlert, setShowAlert] = useState(false)

  const teamUrl = `https://www.balldontlie.io/api/v1/teams`


  
  // const fetchPlayerData = async () => {
  //   const resp = await axios.get(`https://www.balldontlie.io/api/v1/players`, {params: {per_page: 100}}).catch((error) => {
  //     console.error(error)
  //   });
  //   const tesp = await axios.get(teamUrl).catch((error) => {
  //     console.error(error)
  //   })
  //   console.log(resp.data.data);
  //   setPlayers(resp.data.data);
  //   setTeams(tesp.data.data)
  // }
  

  // useEffect(() => {
  //   fetchPlayerData();
  // }, []);
  
  
  // const getPlayerId = () => {
  //   axios.get(`https://www.balldontlie.io/api/v1/players?search=${players.id}`)
  //   .then(async res => {
  //     console.log(res.data.data)
  //     if(res.data.data[0] === undefined){
  //       alert("This player is either injured or hasn't played yet!")
  //     } else if(res.data.data.length > 1){
  //       alert("Pleases specify the name more!")
  //     } else{
  //       await getPlayerStats(res.data.data[0].id)
  //       setPlayerFirstName(res.data.data[0].first_name);
  //       setPlayerLastName(res.data.data[0].last_name);
  //       setSelectedPlayer(res.data.data[0].id);
  //       setPlayerName(res.data.data[0].first_name + ' ' + res.data.data[0].last_name)

  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }


  // const getPlayerStats = (playerId) => {
  //   axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerId}`)
  //   .then(async res => {
  //     // console.log(res.data.data[0])
  //     setPlayerStats(res.data.data[0])
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }


  // const filterPlayers = useMemo(() => {
  //   if (searchValue) {
  //     const searchInputLower = searchValue.toLowerCase()
  //     const result = players.filter((player) => {
  //       return player.last_name.toLowerCase().match(searchInputLower) || player.first_name.toLowerCase().match(searchInputLower)
  //     })
  //     return result
  //   }
  //   return players
  // }, [players, searchValue])

  // const filterAllPlayers = useMemo(() => {
  //   if (searchValue) {
  //     const searchInputLower = searchValue.toLowerCase()
  //     const result = players.filter((player) => {
  //       return player.last_name.toLowerCase().match(searchInputLower) || player.first_name.toLowerCase().match(searchInputLower)
  //     })
  //     return result
  //   }
  //   return players
  // }, [players, searchValue])


  const checkActive = (playerId) => {
    return playerId === isActive
  }


  const onChangeHandler = () => {
    
  }

  // const offset = currentPage * perPage;

  // const currentPageData = players
  //   .slice(offset, offset + perPage)
  //   .map((res, index) => <img key={index} alt=''/>)
  // console.log('currentPageData', currentPageData)
  
  // const pageCount = Math.ceil(players.length / perPage)


  const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));


  

  const getAllPlayers = useCallback((page, players) => {
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5f3bf030eamshe596dd158dcfda6p1bf24cjsnb6f1f8a4de37',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }};
    if (page) {
      return fetch(`https://free-nba.p.rapidapi.com/players?per_page=100&page=${page}`, options)
      .then((response) => response.json())
        .catch(() => new Promise((r) => setTimeout(r, 25000)).then(() => getAllPlayers(page, players)))
        .then((result) => {
          return getAllPlayers(result.meta?.next_page, players.concat(result.data));
        });
    } else return players;
  }, []);


  



  // const getAllPlayers = useCallback((page, players) => {
  //   if (page) {
  //     return fetch(`https://www.balldontlie.io/api/v1/players?per_page=100&page=${page}`)
  //       .then((response) => response.json())
  //       .catch(() => new Promise((r) => setTimeout(r, 25000)).then(() => getAllPlayers(page, players)))
  //       .then((result) => {
  //         return getAllPlayers(result.meta?.next_page, players.concat(result.data));
  //       });
  //   } else return players;
  // }, []);



  useEffect(() => {
    getAllPlayers(1, [])
      .then(setAllPlayers)
      .finally(() => setLoading(false));
  }, [getAllPlayers]);

  const filterAllPlayers = useMemo(() => {
    if (searchValue) {
      const searchInputLower = searchValue.toLowerCase()
      const result = players.filter((player) => {
        return player.last_name.toLowerCase().match(searchInputLower) || player.first_name.toLowerCase().match(searchInputLower)
      })
      return result
    }
    return players
  }, [players, searchValue])

  


  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) await getPlayers(name);
    else setFilteredPlayers(allPlayers.filter((player) => `${player.first_name} ${player.last_name}`.includes(name)));
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  async function getPlayers(name) {
    // const url = `https://www.balldontlie.io/api/v1/players?per_page=100&search=${name}`;
    const url = `https://www.balldontlie.io/api/v1/players?per_page=100&search=${name}`;

    const result = await fetchData(url);
    console.log(result.data)
    setFilteredPlayers(result.data);
  }



  function averagePlayerStats(stats) {
    const assists = stats.data.map((game) => game.ast);
    const blocks = stats.data.map((game) => game.blk);
    const points = stats.data.map((game) => game.pts);
    const rebounds = stats.data.map((game) => game.reb);      
    return {
      averageAssistsPerGame: calculateAverage(assists),
      averageBlocksPerGame: calculateAverage(blocks),
      averagePointsPerGame: calculateAverage(points),
      averageReboundsPerGame: calculateAverage(rebounds),
    };  
  }



  function calculateAverage(stats) {
    const total = stats.reduce((acc, c) => acc + c, 0);
    return total / stats.length;
  }

  async function getPlayerById(id) {
    return await fetchData(`https://www.balldontlie.io/api/v1/players/${id}`);
  }

  async function handlePlayerClick(id) {
    const url = `https://www.balldontlie.io/api/v1/stats?player_ids[]=${id}`;

    const results = await fetchData(url).then(averagePlayerStats);
    
    let playerData = loading ? await getPlayerById(id) : allPlayers.find((player) => player.id === id);

    setSelectedPlayer({
      ...playerData,
      stats: {
        averageAssistsPerGame: results.averageAssistsPerGame,
        averageBlocksPerGame: results.averageBlocksPerGame,
        averagePointsPerGame: results.averagePointsPerGame,
        averageReboundsPerGame: results.averageReboundsPerGame,
      },
    },
    );
  }


  async function fetchData(url) {
    return await fetch(url).then(handleFetchResponse);
  }

  async function handleFetchResponse(r) {
    if (r.ok) {
      return await r.json();
    } else {
      setShowAlert(true);
      console.log(r);
    }
  }



  return (
    <ChakraProvider className='provider' theme={theme}>
      <h1>NBA</h1>
      <Navbar name={name} handleSubmit={handleSubmit} handleChange={handleChange} />

      <div className="main-container">
        <form>
          <Box w='20em'>
            
            {/* <SaveAndCancel saveText='Save' cancelText='Cancel' onSave={submitHandler} onCancel={() => console.log('cancelling...')} /> */}
            {/* <SearchBar onSearchChange={onSearchChange}/> */}
            
          </Box>
        </form>

        <Box w='40em' className='card-container'>
          <PlayerCard className='player-card' player={selectedPlayer}/>
        </Box>


        <Box className='player-container'>
          <PlayerList players={filteredPlayers} handlePlayerClick={handlePlayerClick}></PlayerList>
        </Box>


      </div>
    </ChakraProvider>
  );
}

export default App;
