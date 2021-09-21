import {
  AppBar
} from "@material-ui/core";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListItemIcon from '@mui/material/ListItemIcon';
import DraftsIcon from '@mui/icons-material/Drafts';


export default function Navbar() {

  return (
    <>

      <AppBar style={{ height: "100%", backgroundColor: "#eff0f5", textColor: "black", position: 'static' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText style={{color: "black"}} primary="Podcasts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText style={{color: "black"}} primary="Music" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText style={{color: "black"}} primary="Top Lists" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText style={{color: "black"}} primary="Discover" />
            </ListItemButton>
          </ListItem>  <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText style={{color: "black"}} primary="Favorites" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText style={{color: "black"}} primary="Messages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText style={{color: "black"}} primary="Playlists" />
            </ListItemButton>
          </ListItem>
        </List>

      </AppBar>
    </>
  );
}

