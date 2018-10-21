import * as React from 'react'

export interface MainPageProps {
  resumeData: any;
}

export default class MainPage extends React.Component<MainPageProps, undefined> {
  renderSocialIcon(address: string, icon: string) {
    return (
      <span >
        <a href={address} style={{color: 'white', margin: 25, fontSize: 40}}>
          <i class={icon}></i>
        </a>
      </span>
    )
  }

  render() {
    return (
      <span>
        <img src="./public/assets/profile_photo.png" className="circled" width={150} height={150} />
        <div style={{ fontSize: 40, fontWeight: 'bold', marginTop: 10 }}>
          {this.props.resumeData.name}
        </div>
        <div style={{ fontSize: 18 }}>
          {this.props.resumeData.personBio}
        </div>
        <div style={{marginTop: 40}}>
          {this.props.resumeData.socialLinks.map(link => {
            return this.renderSocialIcon(link.address, link.icon)
          })}
        </div>

        <div style={{maxWidth: 600, margin: 'auto', marginTop: 40, color: '#bbb', fontSize: 14}}>
          {this.props.resumeData.shortDescription}
        </div>        
      </span>
    );
  }
}