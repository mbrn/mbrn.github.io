import * as React from "react";
import { Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import MainPage from "./MainPage";
const resumeData = require('../resume-data.json');

export interface AppProps {
    classes: any;
}
class App extends React.Component<AppProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div id="app" style={{ backgroundImage: 'url(./public/assets/bg.jpg)' }}>
                <div style={{height: '100%', width: '100%'}}>
                    <div style={{paddingTop: 20}}>
                        <Tabs
                            value={this.state.value}
                            onChange={(event, value) => { this.setState({ value }); }}
                            centered
                            classes={{ root: classes.tabText, indicator: classes.tabIndicator }}
                        >
                            <Tab label="About" />
                            <Tab label="Key Skills" />
                            <Tab label="Education" />
                            <Tab label="Experience" />
                        </Tabs>
                    </div>
                    <div style={{ display: 'table', position: 'absolute', width: '100%', minHeight: 400}}>
                        <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white', textAlign: 'center' }}>
                                <div style={{height:50}}></div>
                                <SwipeableViews
                                    axis="x"
                                    index={this.state.value}
                                    onChangeIndex={index => { this.setState({ value: index }); }}
                                >
                                    <MainPage resumeData={resumeData} />
                                    <div>Item Two</div>
                                    <div>Item Three</div>
                                    <div>Item Three</div>
                                </SwipeableViews>
                                {/*  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    root: {
    },
    tabText: {
        color: 'white',        
    },
    tabIndicator: {
        backgroundColor: 'white',
    }
};

export default withStyles(styles)(App)