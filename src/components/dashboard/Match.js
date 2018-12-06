import React from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';




class Match extends React.Component {





    render() {

        const { match } = this.props;

        console.log(match);

        return (
            <React.Fragment>
                <Grid item xs={12} md={6} lg={6}>

                    <Card >

                        <div>


                            <CardContent >
                                <Grid container justify="space-between" alignItems="center" direction="row">
                                    <Grid item>
                                        <Avatar src={match.home.imageUrl} />
                                    </Grid>
                                    <Grid item>
                                        <Grid container justify="center" alignItems="center" direction="column">
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {match.home.name} vs {match.guest.name}
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                {match.homeGoals} : {match.guestGoals}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Avatar src={match.guest.imageUrl} />
                                    </Grid>
                                </Grid>



                            </CardContent>



                        </div>

                    </Card>
                </Grid>
            </React.Fragment>
        );
    }
}



export default Match;