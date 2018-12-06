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


class Events extends React.Component {





    render() {

        const { entries } = this.props;

        const list = entries.map((element, index) => {
            console.log(element);
            return (


                <ListItem button key={element.id}>
                    <ListItemIcon>
                        <Avatar src={element.trainer.imageUrl} />
                    </ListItemIcon>
                    <ListItemText
                        primary={element.name}
                        secondary={element.trainer.name}

                    />
                    <ListItemText
                        primary={element.event}
                        primaryTypographyProps={{ align: 'right' }}
                    />

                </ListItem>
            );
        });

        return (
            <React.Fragment>
                <AppBar position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={16} alignItems="center">
                            <Grid item>
                                <Typography color="textSecondary" align="center">
                                    Events
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



export default Events;