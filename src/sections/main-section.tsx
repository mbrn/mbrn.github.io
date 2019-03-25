import * as React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, withStyles } from '@material-ui/core';

export interface MainSectionProps {
  resumeData: any;
  classes?: any;
}

export class MainSectionInner extends React.Component<MainSectionProps, any> {
  public render() {
    const { classes } = this.props;
    return (
      <Card elevation={0}>
        <CardContent>
          <div className={classes.root}>
            <div style={{textAlign: 'center'}}>
              <img src="./public/assets/profile_photo.png" style={{ maxWidth: 150, maxHeight: 150, borderRadius: 5 }} />
            </div>
            <div>
              <Typography variant="h4" style={{color: '#5B6973', fontWeight: 500}}>{this.props.resumeData.name}</Typography>
              <Typography variant="caption" color="textSecondary">{this.props.resumeData.personBio}</Typography>

              <Typography variant="body1" style={{ paddingTop: 20, textAlign: 'justify' }} color="textSecondary">{this.props.resumeData.shortDescription}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}


const styles = {
  root: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '150px auto',
    '@media only screen and (max-width: 400px)': {
      display: 'block'
    }
  }
};

export const MainSection = withStyles(styles as any)(MainSectionInner)

