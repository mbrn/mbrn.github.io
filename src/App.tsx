import * as React from "react";
import { withStyles } from '@material-ui/core';
import { MainSection } from "./sections/main-section";
import { SocialLinksSection } from "./sections/social-links-section";
import { KeySkillsSection } from "./sections/key-skills-section";
import { ExperienceSection } from "./sections/experience-section";
import { PortfolioSection } from "./sections/portfolio-section";
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
      <div style={{ maxWidth: 800, margin: 'auto', padding: 5, overflowY: 'auto' }}>
        <MainSection resumeData={resumeData}/>
        <Spacer/>
        <SocialLinksSection resumeData={resumeData}/>
        <Spacer/>
        <KeySkillsSection resumeData={resumeData}/>
        <Spacer/>
        <PortfolioSection resumeData={resumeData}/>
        <Spacer/>
        <ExperienceSection resumeData={resumeData}/>
      </div>
    );
  }
}

const Spacer = ({height} : {height?: number}) => <div style={{height: height || 5}}/> 

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