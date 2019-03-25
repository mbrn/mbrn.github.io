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
          {/* <Grid container spacing={16}>
            <Grid item xs={12} sm={3} md={2} lg={2}>
              <img src="./public/assets/profile_photo.png" style={{ maxWidth: 150, maxHeight: 150, borderRadius: 5 }} />
            </Grid>
            <Grid item xs={12} sm={9} md={10} lg={10}>
              <Typography variant="h4">{this.props.resumeData.name}</Typography>
              <Typography variant="caption" color="textSecondary">{this.props.resumeData.personBio}</Typography>

              <Typography variant="body1" style={{ paddingTop: 20, textAlign: 'justify' }} color="textSecondary">{this.props.resumeData.shortDescription}</Typography>
            </Grid>
          </Grid> */}

          <div className={classes.root}>
            <div>
              <img src="./public/assets/profile_photo.png" style={{ maxWidth: 150, maxHeight: 150, borderRadius: 5 }} />
            </div>
            <div>
              <Typography variant="h4">{this.props.resumeData.name}</Typography>
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

