import * as React from 'react';
import { Tooltip, Card, CardHeader, CardContent, withStyles, Typography, Divider, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import Tag from '../components/tag';

export interface PortfolioSectionProps {
  resumeData: any;
  classes?: any;
}

class PortfolioSectionInner extends React.Component<PortfolioSectionProps, any> {
  state = {
    isDialogOpen: false,
    dialogTitle: '',
    dialogImage: ''
  }

  portfolio = (portfolio, index) => {
    const imgUrl = "./public/assets/portfolio/" + portfolio.image;
    return (
      <div>
        <div className={this.props.classes.portfolio}>
          <div style={{ textAlign: 'center' }}>
            <img src={imgUrl} className={this.props.classes.image} onClick={() => this.setState({
              isDialogOpen: true,
              dialogTitle: portfolio.title,
              dialogImage: imgUrl
            })} />
          </div>
          <div>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>
                <Typography variant="h6" style={{ flex: 1, color: '#5B6973' }}>{portfolio.title}</Typography>
              </div>
              <div>
                <div>
                  {portfolio.docUrl &&
                    <Tooltip title="Documentation">
                      <IconButton style={{ color: '#5B6973AA', fontSize: 18 }} href={portfolio.docUrl}>
                        {React.createElement("i", { class: "fab fa-readme" })}
                      </IconButton>
                    </Tooltip>
                  }
                  {portfolio.github &&
                    <Tooltip title="Source">
                      <IconButton style={{ color: '#5B6973AA', fontSize: 18 }} href={portfolio.github}>
                        {React.createElement("i", { class: "fab fa-github" })}
                      </IconButton>
                    </Tooltip>
                  }
                  {portfolio.url &&
                    <Tooltip title="Project">
                      <IconButton style={{ color: '#5B6973AA', fontSize: 18 }} href={portfolio.url}>
                        {React.createElement("i", { class: "fas fa-desktop" })}
                      </IconButton>
                    </Tooltip>
                  }
                </div>
              </div>
            </div>
            <Typography variant="body1" style={{ color: '#5B6973', textAlign: 'justify', marginTop: 10, marginBottom: 10 }}>
              {portfolio.description}
            </Typography>

          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          {portfolio.skills.map(skill => <Tag text={skill} />)}
        </div>

        {
          index !== (this.props.resumeData.portfolio.length - 1) &&
          <Divider style={{ margin: 20 }} />
        }
      </div >


    )
  }

  dialog = () => (
    <Dialog
      open={this.state.isDialogOpen}
      onClose={() => this.setState({ isDialogOpen: false })}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle>{this.state.dialogTitle}</DialogTitle>
      <DialogContent>
        <img src={this.state.dialogImage} style={{ width: '100%', height: '100%' }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => this.setState({ isDialogOpen: false })}>Close</Button>
      </DialogActions>
    </Dialog>
  )

  public render() {
    return (
      <>
        <Card elevation={0}>
          <CardHeader title="Portfolio" titleTypographyProps={{ variant: 'h5', style: { color: '#5B6973' } }} />
          <CardContent>
            {this.props.resumeData.portfolio.map(this.portfolio)}
          </CardContent>
        </Card>
        {this.dialog()}
      </>
    );
  }
}


const styles = {
  portfolio: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '180px auto',
    '@media only screen and (max-width: 400px)': {
      display: 'block'
    }
  },
  image: {
    maxWidth: 150,
    maxHeight: 150,
    borderRadius: 5,
    transition: 'all ease 400ms',
    cursor: 'pointer',
    opacity: 0.6,
    filter: 'grayscale(50%)',
    '@media only screen and (max-width: 400px)': {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    '&:hover': {
      opacity: 1,
    }
  }
};

export const PortfolioSection = withStyles(styles as any)(PortfolioSectionInner);