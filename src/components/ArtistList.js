import List from '@mui/material/List';
import Artist from './Artist';
import BoldHeading from './BoldHeading';
import ListItem from '@mui/material/ListItem';
import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = theme => ({
    BoldText: {
        fontWeight: 600,
        fontSize: 20,
    },
    PlainButton: {
        textTransform: "none",
        padding: 0,
    }
});

class ArtistList extends Component {
    constructor(props) {
        super()

        this.state = {
            artists: [
                { "name": "Taylor Swift", "followerCount": "23.8k Followers" },
                { "name": "Miley Cyrus", "followerCount": "23.8k Followers" },
                { "name": "Madonna", "followerCount": "23.8k Followers" },
                { "name": "Taylor Swift", "followerCount": "23.8k Followers" },
                { "name": "Beyoncé", "followerCount": "23.8k Followers" },
                { "name": "Taylor Swift", "followerCount": "23.8k Followers" },
                { "name": "Michael Jack", "followerCount": "23.8k Followers" },
                { "name": "Jenni Lopez", "followerCount": "23.8k Followers" },
                { "name": "Justin Bieber", "followerCount": "23.8k Followers" },

            ],
            itemsToShow: 6,
            expanded: false
        }
    }
    showMore = () => {
        console.log("show more clicked!");
        this.state.itemsToShow === 6 ? (
            this.setState({ itemsToShow: this.state.artists.length, expanded: true })
        ) : (
            this.setState({ itemsToShow: 6, expanded: false })
        )
    }

    render() {
        const { classes } = this.props;

        return (

            <>
                <Grid container spacing={3}>
                    <Grid item xs={"auto"}>
                        <BoldHeading>  Popular Artists  </BoldHeading>
                    </Grid>
                    <Grid item xs={"auto"}>
                        <Button className={classes.PlainButton} onClick={this.showMore}>Show more</Button>

                    </Grid>
                </Grid>
                <List>
                    {this.state.artists.slice(0, this.state.itemsToShow).map((artist, i) =>
                        <ListItem disablePadding>
                            <Artist Name={artist.name} FollowerCount={artist.followerCount}></Artist>
                        </ListItem>
                    )}

                </List>
            </>

        );
    }
}

export default withStyles(useStyles)(ArtistList);


