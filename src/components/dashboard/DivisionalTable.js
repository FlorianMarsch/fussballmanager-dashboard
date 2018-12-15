import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TrainerPoints from './TrainerPoints';

class DivisionalTable extends React.Component {





    render() {

        const { entries } = this.props;
        const divsionNames = ['A', 'B', 'C'];


        const list = entries
            .map(entry => {
                let mapped = Object.keys(entry).map(key => entry[key]);

                return mapped;
            }).flatMap((division, index) => {
                let divisionname = divsionNames[index];
                let upToDivision = divsionNames[index - 1];
                let downToDivision = divsionNames[index + 1];

                const divisionalItems = division[0].map((element, index) => {

                    let isLeagueClimber = (divisionname === 'B' || divisionname === 'C') && index === 0;
                    let isRelegatedTeam = (divisionname === 'B' || divisionname === 'A') && index === 3;
                    let upTo = upToDivision;
                    let downTo = downToDivision;

                    return <TrainerPoints element={element} index={index} key={element.id} climber={isLeagueClimber} upTo={upTo} relegated={isRelegatedTeam} downTo={downTo} />
                });

                return (
                    <Grid item xs={12} md={4} >
                        <AppBar position="static" color="default" elevation={0}>
                            <Toolbar>
                                <Grid container spacing={16} alignItems="center">
                                    <Grid item>
                                        <Typography color="textSecondary" align="center">
                                            Division {divisionname}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                        <List component="nav">
                            {divisionalItems}
                        </List>
                    </Grid>);
            });

        return (
            <React.Fragment>

                <Grid container spacing={8} alignItems="center" >

                    {list}

                </Grid>
            </React.Fragment>
        );
    }
}



export default DivisionalTable;