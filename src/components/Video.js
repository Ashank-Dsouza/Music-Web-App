import MusicVideoPicture from "../pictures/MusicVideoPicture.png"
import audio from "../audios/Manike-Mage.mp3";
import { Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { useState, useRef } from "react";


const useStyles = makeStyles({
    SongName: {
        fontWeight: 600,
        fontSize: 16,
    },
    ArtistName: {
        color: "#596675",
        fontSize: 16,
    },
    ImageButton: {
        border: "0",
        padding: "0"
    }
})

function Video(props) {
    const { SongName, ArtistName, Year, Song } = props;

    const classes = useStyles();

    const PlaySong = () => {
        console.log("play")
        setIsPlaying(true);
        Song.play();
    }

    const PauseSong = () => {
        console.log("pause");
        setIsPlaying(false);
        Song.pause();
    }

    const [IsPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <button className={classes.ImageButton} >
                <img onClick={IsPlaying ? PauseSong : PlaySong} width="328" height="200" className="photo" src={MusicVideoPicture} />
            </button >
            <Box sx={{ pl: 2 }}>
                <Typography className={classes.SongName} variant="h5" >
                    {SongName}
                </Typography>
                <Typography className={classes.ArtistName} variant="h6" >
                    {ArtistName + ", " + Year}
                </Typography>
            </Box>
        </>
    );
}

export default Video;

Video.propTypes = {
    SongName: PropTypes.string.isRequired,
    ArtistName: PropTypes.string.isRequired,
    Year: PropTypes.string,
};