import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class DivisionalTable extends React.Component {





    render() {

        const { entries } = this.props;
        const divsionNames = ['A', 'B', 'C'];


        const list = entries
            .map(entry => {
                let mapped = Object.keys(entry).map(key => entry[key]);

                return mapped;
            }).flatMap((division, index) => {

                const divisionalItems = division[0].map((element, index) => {


                    return (


                        <ListItem button key={element.id}>
                            <ListItemIcon>
                                <Avatar src={element.trainer.imageUrl} />
                            </ListItemIcon>
                            <ListItemText
                                primary={(index + 1) + ". " + element.trainer.name}
                                secondary={element.won + "-" + element.draw + "-" + element.loose}
                            />
                            <ListItemText
                                primary={element.points}
                                primaryTypographyProps={{ align: 'right' }}
                                secondary={"(+" + element.betterPoints + ")"}
                                secondaryTypographyProps={{ align: 'right' }}
                            />

                        </ListItem>
                    );
                });

                return (
                    <Grid item xs={12} md={4}>
                        <AppBar position="static" color="default" elevation={0}>
                            <Toolbar>
                                <Grid container spacing={16} alignItems="center">
                                    <Grid item>
                                        <Typography color="textSecondary" align="center">
                                            Division {divsionNames[index]}
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