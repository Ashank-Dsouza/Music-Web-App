import ArtistList from '../components/ArtistList';
import BrowseList from '../components/BrowseList';
import { Grid } from '@material-ui/core';
import Navbar from '../components/NavBar';


function MusicVideosPage() {
  return (
    <>
      <Grid container spacing={3}>
      <Grid item xs={3}>
      <Navbar></Navbar>
      </Grid>
      <Grid item xs={6}>

      <BrowseList></BrowseList>
      </Grid>
      <Grid item xs={3}>
      <ArtistList></ArtistList>
      </Grid>
      </Grid>


    </>
  );
}

export default MusicVideosPage;
