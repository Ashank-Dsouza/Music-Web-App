import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ArtistPicture from "../pictures/Artist.jpg"
import {
    Grid, Box, Menu
} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
    SongName: {
        fontWeight: 600,
        fontSize: 14,
    },
    FollowerCount: {
        fontSize: 12,
        color: "#596675",
    },
    ArtistImage: {
        borderRadius: '50%',
        width: '80px',
        height: '80px'
    }
})

function Artist(props) {

    const classes = useStyles();

    const { Name, FollowerCount } = props;
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={"auto"}>
                    <img className={classes.ArtistImage} src={ArtistPicture} />
                </Grid>
                <Grid item xs={"auto"}>

                    <Box sx={{ pt: 2.5 }}>
                        <Typography className={classes.SongName} variant="h5" >
                            {Name}
                        </Typography>
                        <Typography className={classes.FollowerCount} variant="h6" >
                            {FollowerCount}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={"auto"}>
                <Box sx={{ pt: 2.5 }}>

                    <MoreVertIcon></MoreVertIcon>
                </Box>

                    {/* <IconButton icon="dots-vertical" >...</IconButton> */}
                </Grid>
            </Grid>
        </>
    );
}

export default Artist;

Artist.propTypes = {
    Name: PropTypes.string.isRequired,
    FollowerCount: PropTypes.string.isRequired,
};
