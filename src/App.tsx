import * as React from "react";
const resumeData = require('../resume-data.json');

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div id="app" style={{ backgroundImage: 'url(./public/assets/bg.jpg)' }}>

                <div style={{display: 'table', position: 'absolute', height: '100%', width: '100%'}}>
                    <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto', color:'white', textAlign:'center'}}>
                            <img src="./public/assets/profile_photo.png" className="circled" width={200} height={200}/>
                            <div style={{fontSize:50, fontWeight: 'bold'}}>
                                {resumeData.name}
                            </div>
                            <div style={{fontSize:20}}>
                                {resumeData.personBio}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div style={{color:'white', textAlign:'center'}}>
                    <div style={{fontSize:50, fontWeight: 'bold'}}>
                        {resumeData.name}
                    </div>
                    <div style={{fontSize:20}}>
                        {resumeData.personBio}
                    </div>
                </div> */}
                
            </div>
        );
    }
}