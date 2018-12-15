import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import Avatar from '@material-ui/core/Avatar';
import ClimberIcon from '@material-ui/icons/ArrowUpwardOutlined';
import RelegatedIcon from '@material-ui/icons/ArrowDownwardTwoTone';

import Grid from '@material-ui/core/Grid';
class TrainerPoints extends React.Component {





    render() {

        const { element, index, climber = false, relegated = false, downTo, upTo } = this.props;
        console.log(this.props)

        return (


            <ListItem button key={element.id}>



                <ListItemIcon>
                    <Grid container justify="space-between" alignItems="center" direction="column">
                        <div style={{ display: climber ? 'block' : 'none' }}>
                            <Grid container justify="space-between" alignItems="center" direction="row">
                                <ClimberIcon />
                                {upTo}
                            </Grid>
                        </div>
                        <Avatar src={element.trainer.imageUrl} />
                        <div style={{ display: relegated ? 'block' : 'none' }}>
                            <Grid container justify="space-between" alignItems="center" direction="row">
                                <RelegatedIcon />
                                {downTo}
                            </Grid>
                        </div>
                    </Grid>
                </ListItemIcon>
                <ListItemText
                    primary={(index + 1) + ". " + element.trainer.name}
                    secondary={<React.Fragment>
                        <Typography component="span" color="textPrimary">
                            {"Serie: " + element.won + "-" + element.draw + "-" + element.loose}
                        </Typography>
                        {"Torverhältnis " + element.goals + " : " + element.goalsAgainst}
                    </React.Fragment>}



                />


                <ListItemText
                    primary={element.points}
                    primaryTypographyProps={{ align: 'right' }}
                    secondary={"(+" + element.betterPoints + ")"}
                    secondaryTypographyProps={{ align: 'right' }}
                />


            </ListItem >
        );
    };
}






export default TrainerPoints;