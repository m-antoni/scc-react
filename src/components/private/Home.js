import React from 'react'
import { connect } from 'react-redux';
import { logoutAlert } from '../../redux/actions/auth.actions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles({
//  
});

function Home({ auth, logoutAlert }) {

    const classes = useStyles();

    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12}>
                <Card elevation={5}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://source.unsplash.com/random/800x600"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lorem
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorems are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    
                        <Button size="small" color="primary" variant="default">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Card elevation={5}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://source.unsplash.com/random/800x600"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lorem
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorems are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    
                        <Button size="small" color="primary" variant="default">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card elevation={5}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://source.unsplash.com/random/800x600"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lorem
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorems are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    
                        <Button size="small" color="primary" variant="default">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card elevation={5}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://source.unsplash.com/random/800x600"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lorem
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorems are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    
                        <Button size="small" color="primary" variant="default">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutAlert })(Home)
