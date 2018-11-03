import * as React from 'react'

export interface MainPageProps {
  resumeData: any;
}

export default class MainPage extends React.Component<MainPageProps, undefined> {
  renderSocialIcon(address: string, icon: string) {
    return (
      <span >
        <a href={address} style={{ color: '#eee', margin: 25, fontSize: 35 }}>
          {React.createElement("i", { class: icon })}
        </a>
      </span>
    )
  }

  render() {
    return (
      <span>
        <div>
          {/* <img src="./public/assets/profile_photo.png" className="circled" width={125} height={125} /> */}
        </div>
        <div style={{ fontSize: 40, fontWeight: 'bold', marginTop: 10 }}>
          {this.props.resumeData.name}
        </div>
        <div style={{ fontSize: 18 }}>
          {this.props.resumeData.personBio}
        </div>
        <div style={{ maxWidth: 600, margin: 'auto', marginTop: 40, color: '#ddd', fontSize: 14, backgroundColor: '#FFFFFF22', padding: 20, borderRadius: 10 }}>
          {this.props.resumeData.shortDescription}
        </div>
        <div style={{ marginTop: 40 }}>
          {this.props.resumeData.socialLinks.map(link => {
            return this.renderSocialIcon(link.address, link.icon)
          })}
        </div>


      </span>
    );
  }
}