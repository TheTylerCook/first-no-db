import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Button extends Component {
        render() {
            return (
                    <div>
                  <MuiThemeProvider>
                      <RaisedButton label="Primary" onClick={this.props.getWeather} primary={true} buttonStyle={{backgroundColor: 'blue'}} labelStyle={{color: 'white'}}  />
                  </MuiThemeProvider>
                    </div>
                  );
                
        }

}
export default Button;