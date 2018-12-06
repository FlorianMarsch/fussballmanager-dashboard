import React from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import LinearProgress from '@material-ui/core/LinearProgress';
import Matchday from './Matchday';
import Results from './Results';
import AllTimeTable from './AllTimeTable';


class Dashboard extends React.Component {

    state = {
        allTimeTable: [],
        matchday: [],
        divisionalTables: [],
        results: [],
        events: [],
        loading: true
    }


    componentDidMount() {
        fetch('https://fussballmanager.herokuapp.com/api/leaderboard', {
            method: 'GET',
            mode: 'cors',
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ ...data, loading: false });
            });
    }

    render() {

        const { loading, matchday, results, allTimeTable } = this.state;

        return (
            <React.Fragment >
                {loading &&
                    <React.Fragment>
                        <LinearProgress />
                        <div >
                            <Typography color="textSecondary" align="center">
                                Loading
                            </Typography>
                        </div>
                    </React.Fragment>}
                {!loading && <React.Fragment>
                    <Grid container justify="space-between" alignItems="center" direction="row">
                        <Grid item xs={12}>
                            <Matchday matchday={matchday} />
                        </Grid>
                        <Grid item xs={12}>
                            <Results results={results} />
                        </Grid>
                        <Grid item xs={12} >
                            <AllTimeTable entries={allTimeTable} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <AllTimeTable entries={allTimeTable} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <AllTimeTable entries={allTimeTable} />
                        </Grid>
                    </Grid>
                </React.Fragment>}
            </React.Fragment>
        );
    }
}



export default Dashboard;