import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';
import teal from '@material-ui/core/colors/teal';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator';
import Dashboard from './dashboard/Dashboard';
import Header from './Header';

let theme = createMuiTheme({

    palette: {
        primary: teal,
        secondary: lime,
        type: 'dark',
    }
});

const drawerWidth = 256;

const styles = () => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    mainContent: {
        flex: 1,
        padding: '48px 36px 0',
        background: '#eaeff1',
    },
});

class Paperbase extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline />
                    <nav className={classes.drawer}>
                        <Hidden smUp implementation="js">
                            <Navigator
                                PaperProps={{ style: { width: drawerWidth } }}
                                variant="temporary"
                                open={this.state.mobileOpen}
                                onClose={this.handleDrawerToggle}
                            />
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
                        </Hidden>
                    </nav>
                    <div className={classes.appContent}>


                        <Header onDrawerToggle={this.handleDrawerToggle} />
                        <Dashboard />

                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

Paperbase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);