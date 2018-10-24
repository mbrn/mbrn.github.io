import * as React from 'react';
import { LinearProgress, Grid, withStyles } from '@material-ui/core';

const styles = {
  root: {
    height: 20,
    borderRadius: 5,
    marginTop: 2
  },
  colorPrimary: {
    backgroundColor: '#FFFFFF11',
  },
  barColorPrimary: {
    backgroundColor: '#388E3C',
  }
};
const Skill = withStyles(styles)((props: {value: number, text: string, classes?: any}) => {
  const { classes } = props;
  return (
    <div style={{marginBottom: 40}}>
      <Grid container>
        <Grid item xs={6} style={{textAlign: 'left'}}>{props.text}</Grid>
        <Grid item xs={6} style={{textAlign: 'right'}}>{props.value + "%"}</Grid>
      </Grid>      
      <LinearProgress 
        variant="determinate" 
        value={props.value}
        classes={...classes}
      />
    </div>
  );
})


export interface KeySkillsProps {
  resumeData: any;  
}
export default class KeySkills extends React.Component<KeySkillsProps, undefined> {
  render() {    
    return (
      <div style={{flexGrow: 1, maxWidth: 600, margin: 'auto', padding: 10}}>
        {this.props.resumeData.keySkills.map(skill => <Skill value={skill.level} text={skill.name}/>)}
      </div>
    );
  }
}
