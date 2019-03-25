import * as React from 'react';
import { Card, CardHeader, CardContent, withStyles, Typography, Divider, Icon, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

export interface ExperienceSectionProps {
  resumeData: any;
  classes?: any;
}

class ExperienceSectionInner extends React.Component<ExperienceSectionProps, any> {
  experience = (experience, index) => {
    return (

      <div>
        <div className={this.props.classes.experience}>
          <div>
            <img src={"./public/assets/company/" + experience.logo} style={{ maxWidth: 100, maxHeight: 100, borderRadius: 5, filter: 'grayscale(50%)', opacity: 0.6 }} />
          </div>
          <div>
            <div style={{ display: 'flex' }}>
              <Typography variant="h6" style={{ flex: 1, color: '#5B6973' }}>{experience.title}</Typography>
              <div>
                <Typography variant="body2" style={{ color: '#5B6973' }}>{experience.company}, {experience.location}</Typography>
                <Typography variant="body2" style={{ float: 'right', color: '#5B6973' }}>{experience.start}-{experience.end}</Typography>
              </div>
            </div>
            <List>
              {experience.jobs.map(job => (
                <ListItem dense style={{ padding: 0 }}>
                  <ListItemIcon style={{ alignSelf: 'flex-start', fontSize: 6, margin: '6px 0 0', color: '#5B6973' }}><i className="fas fa-circle" /></ListItemIcon>
                  <ListItemText primary={job} primaryTypographyProps={{ variant: 'body1', style: { color: '#5B6973' } }} style={{ paddingLeft: 5 }} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>

        {index !== (this.props.resumeData.experience.length - 1) &&
          <Divider style={{ margin: 20 }} />
        }
      </div>


    )
  }

  public render() {
    return (
      <Card elevation={0}>
        <CardHeader title="Experience" titleTypographyProps={{ variant: 'h5', style: { color: '#5B6973' } }} />
        <CardContent>
          {this.props.resumeData.experience.map(this.experience)}
        </CardContent>
      </Card>
    );
  }
}


const styles = {
  experience: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '100px auto',
    '@media only screen and (max-width: 400px)': {
      display: 'block'
    }
  }
};

export const ExperienceSection = withStyles(styles as any)(ExperienceSectionInner);