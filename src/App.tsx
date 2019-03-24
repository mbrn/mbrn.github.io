import * as React from "react";
import { withStyles } from '@material-ui/core';
import { MainSection } from "./sections/main-section";
import { SocialLinksSection } from "./sections/social-links-section";
import { KeySkillsSection } from "./sections/key-skills-section";
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
      <div style={{ maxWidth: 1000, margin: 'auto', padding: 5, overflowY: 'auto' }}>
        <Spacer/>
        <MainSection resumeData={resumeData}/>
        <Spacer/>
        <SocialLinksSection resumeData={resumeData}/>
        <Spacer/>
        <KeySkillsSection resumeData={resumeData}/>
      </div>
    );
  }
}

const Spacer = () => <div style={{height: 20}}/> 

const styles = {
  root: {
  },
  tabText: {
    color: '#fff',
  },
  tabIndicator: {
    display: 'none',
  }
};

export default withStyles(styles as any)(App)