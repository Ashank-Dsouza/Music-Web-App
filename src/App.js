import './App.css';
import Video from './components/Video';
import Artist from './components/Artist';
import ArtistList from './components/ArtistList';
import BrowseList from './components/BrowseList';
import { Grid } from '@material-ui/core';
import MusicVideosPage from './pages/MusicVideosPage';


function App() {
  return (
    <>
      {/* <Video SongName={"Girls Like You"} ArtistName={"Melina Lange"} Year={"2019"}  ></ Video> */}
      {/* <Artist Name={"Sara Christensen"} FollowerCount={"23.8k Followers"}></Artist> */}
      <MusicVideosPage></MusicVideosPage>


    </>
  );
}

export default App;
