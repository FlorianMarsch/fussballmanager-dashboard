import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';



class Matchday extends React.Component {





    render() {

        const { matchday } = this.props;

        return (
            <React.Fragment>
                <AppBar position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={16} alignItems="center">
                            <Grid item>
                                <Typography color="textSecondary" align="center">
                                    {matchday.number}. Spieltag : {matchday.status}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}



export default Matchday;