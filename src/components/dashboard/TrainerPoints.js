import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import Avatar from '@material-ui/core/Avatar';


class TrainerPoints extends React.Component {





    render() {

        const { element, index } = this.props;


        return (


            <ListItem button key={element.id}>



                <ListItemIcon>
                    <Avatar src={element.trainer.imageUrl} />
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