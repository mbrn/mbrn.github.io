import * as React from 'react';
import { Card, CardHeader, CardContent, Typography, Icon, Grid, LinearProgress, withStyles } from '@material-ui/core';

export interface KeySkillsSectionProps {
  resumeData: any;
  classes?: any;
}

class KeySkillsSectionInner extends React.Component<KeySkillsSectionProps, any> {
  public render() {
    return (
      <Card elevation={0}>
        <CardHeader title="Key Skills" titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <Grid container spacing={32}>
            {this.props.resumeData.keySkills.map(skill => (
              <Grid item xs={4} sm={3} md={2} lg={2}>
                <img src={"./public/assets/" + skill.logo} style={{padding: '0 20%', maxWidth: '60%', filter: 'grayscale(100%)', opacity: 0.5}}/>

                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  classes={...this.props.classes}
                />
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: 1 }}>
                    <Typography variant="caption" color="textSecondary">{skill.name}</Typography>
                  </div>

                  <div>
                    <Typography variant="caption" color="textSecondary">{skill.level + '%'}</Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>

        </CardContent>
      </Card>
    );
  }
}

const styles = {
  root: {
    height: 12,
    borderRadius: 5,
    marginTop: 2
  },
  colorPrimary: {
    backgroundColor: '#e8eaf5',
  },
  barColorPrimary: {
    backgroundColor: '#b0bec5',
  }
};

export const KeySkillsSection = withStyles(styles)(KeySkillsSectionInner);