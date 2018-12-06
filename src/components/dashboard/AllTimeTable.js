import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TrainerPoints from './TrainerPoints';

class AllTimeTable extends React.Component {





    render() {

        const { entries } = this.props;

        const list = entries.filter(element => element.won > 0).map((element, index) => <TrainerPoints element={element} index={index} key={element.id} />);


        return (
            <React.Fragment>

                <AppBar position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={16} alignItems="center">
                            <Grid item>
                                <Typography color="textSecondary" align="center">
                                    Gesamtübersicht
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={8} alignItems="center" >
                    <List component="nav">
                        {list}
                    </List>
                </Grid>

            </React.Fragment>
        );
    }
}



export default AllTimeTable;