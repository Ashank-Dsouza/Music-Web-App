import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    BoldText: {
        fontWeight: 600,
        fontSize: 20,
    }
})

function BoldHeading(props) {

    const classes = useStyles();

    const { Name, FollowerCount } = props;
    return (
        <>
         <Typography className={classes.BoldText} variant="h5" >
                            {props.children}
        </Typography>
        </>
    )
}

export default BoldHeading;