import React from 'react';
import Grid from '@material-ui/core/Grid';

import Match from './Match';


class Results extends React.Component {





    render() {

        const { results } = this.props;
        const matches = results ? results.map(element => <Match match={element} key={element.id} />) : [];
        return (
            <React.Fragment>
                <Grid container spacing={8} alignItems="center" >
                    {matches}
                </Grid>
            </React.Fragment>
        );
    }
}



export default Results;