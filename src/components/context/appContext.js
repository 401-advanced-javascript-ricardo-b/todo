import React from 'react';

export const AppContext = React.createContext();

class AppSettings extends React.Component{
  constructor(props){
    super(props);
      this.state={
        maxDisplay: 4,
        sortMethod: 'text',
        hide: true,
      }
    
  }

  render(){
    return(

      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppSettings;