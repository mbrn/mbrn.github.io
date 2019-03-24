import * as React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core';

export interface MainSectionProps {
  resumeData: any;
}

export class MainSection extends React.Component<MainSectionProps, any> {
  public render() {
    return (
      <Card elevation={0}>
        <CardContent>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={3} md={2} lg={2} style={{ maxWidth: 150 }}>
              <img src="./public/assets/profile_photo.png" style={{ width: 150, height: 150, borderRadius: 5 }} />
            </Grid>
            <Grid item xs={12} sm={9} md={10} lg={10} style={{ paddingLeft: 20 }}>
              <Typography variant="h4">{this.props.resumeData.name}</Typography>
              <Typography variant="caption" color="textSecondary">{this.props.resumeData.personBio}</Typography>

              <Typography variant="body1" style={{ paddingTop: 20, textAlign: 'justify' }} color="textSecondary">{this.props.resumeData.shortDescription}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}