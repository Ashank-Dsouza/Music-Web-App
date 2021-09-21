
import Video from './Video';
import React, { Component } from "react";
import {
    Grid
} from "@material-ui/core";
import BoldHeading from './BoldHeading';
import audio from "../audios/Manike-Mage.mp3";
import SearchBar from './SearchBar';


class BrowseList extends Component {
    constructor(props) {
        super()
        console.log("constructor");
        const { search } = window.location;
        const query = new URLSearchParams(search).get('s');
        console.log(query);
        this.audioElement = new Audio(audio);

        this.state = {
            songs: [
                { "artistName": "Taylor Swift", "songName": "Girls Like You", "year": "2020", "audioElement": this.audioElement },
                { "artistName": "Miley Cyrus", "songName": "Brave For You", "year": "2020", "audioElement": this.audioElement },
                { "artistName": "Madonna", "songName": "Because The Night", "year": "2020", "audioElement": this.audioElement },
                { "artistName": "Taylor Swift", "songName": "Shutup, Kiss Me", "year": "2020", "audioElement": this.audioElement },
                // { "artistName": "Taylor Swift", "songName": "Shutup, Kiss Me", "year": "2020", "audioElement": this.audioElement }

            ],
            itemsToShow: 2, //number of rows
        }
        this.rows = this.formatSongs(this.state.songs, query);
    }


    formatSongs(songs, query) {
        var rows = []

        if(query && query.length > 0){
            const queryLowerCase = query.toLowerCase();
            songs = songs.filter((song) => {
                const songName = song.songName.toLowerCase();

                console.log("the song Name is: ", songName);
                console.log("returns songName.includes(queryLowerCase) : ", songName.includes(queryLowerCase));
                return songName.includes(queryLowerCase);
            });
        }
        console.log("the songs are now: ", songs);

        for (let index = 0; index < songs.length; index++) {
            if (index % 2 === 0) {
                const songOne = songs[index];
                var songTwo = null;
                const secondIndex = index + 1;
                if (secondIndex < songs.length) {
                    songTwo = songs[index + 1];
                } 
                rows.push([songOne, songTwo])
            }
        }
        console.log(rows)
        return rows;
       
    }

    // rows =  formatSongs()

    render() {

        return (
            <>
                <SearchBar></SearchBar>
                <BoldHeading>Featured Videos</BoldHeading>
                {this.rows.slice(0, this.state.itemsToShow).map((videos, i) =>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Video Song={videos[0].audioElement} Year={videos[0].year} ArtistName={videos[0].artistName} SongName={videos[0].songName}></Video>
                        </Grid>
                        {videos[1] != null ? 
                        <Grid item xs={6}>
                            <Video Song={this.audioElement} Year={videos[1].year} ArtistName={videos[1].artistName} SongName={videos[1].songName}></Video>
                        </Grid>
                            :
                            null
                        }

                    </Grid>

                )}

            </>
        );
    }
}

export default BrowseList;


