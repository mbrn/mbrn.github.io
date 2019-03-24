import * as React from 'react';
import { Card, CardHeader, CardContent, Typography, Icon } from '@material-ui/core';

export interface SocialLinksSectionProps {
  resumeData: any;
}

export class SocialLinksSection extends React.Component<SocialLinksSectionProps, any> {
  public render() {
    return (
      <Card elevation={0}>        
        <CardContent style={{padding: 10}}>
          <div style={{ display: 'flex' }}>
            {this.props.resumeData.socialLinks.map(link => (
              <span style={{ flex: 1, textAlign: 'center' }}>
                <a href={link.address} style={{ color: '#78909c', margin: 25, fontSize: 25 }}>
                  {React.createElement("i", { class: link.icon })}
                </a>
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
}