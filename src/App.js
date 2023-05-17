import React from 'react';

//-------------------------------------------Mounting Components Start ----------------------------------------
// class App extends React.Component {
//   //this is the class components created as(class Filename React.Components)
//   constructor() {
//     super();
//     console.log(
//       'This is the first way to create the constructure  (first constructure name is maountain)'
//     );
//     // it is similer as were we can use (this.state)
//   }
//   componentDidMount() {
//     // basically use of this components is for APIs call where he call once
//     console.log('Components-Did-Mount');
//   }
//   render() {
//     // render method is compalsory when we create the class components
//     // render also define the GUI and jsx of the page
//     console.log('RENDER');
//     return <div className="App"></div>;
//   }
// }
//-------------------------------------------Mounting Components End ----------------------------------------
//-------------------------------------------Updating Components Start ----------------------------------------
// class App extends React.Component {
//   constructor() {
//     super();
//     console.log('Constructure');
//     this.state = { count: 0 };
//   }
//   componentDidMount() {
//     console.log('COMPONENT_DID_MOUNT');
//   }
//   //here we can create the updating components
//   componentDidUpdate(prevProps, prevState) {
// Performing Action
//     console.log('Components_Did_Update-');
//     // console.log('prevProps', prevProps); //for the previous props
//     console.log('prevState', prevState); //for the previous state
//     // console.log('props', this.props); //this is show the current props
//     console.log('state', this.state); //this is basically show the current state
//     if (prevState.count === 0 && this.state.count === 1) {
//       this.setState({ count: 100 });
//     }
//   }
//   handleClick = () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   };
//   render() {
//     console.log('RENDER');
//     return (
//       <div className="App">
//         {this.state.count}
//         <button onClick={this.handleClick}>Inc Count</button>
//       </div>
//     );
//   }
// }

//-------------------------------------------Updating Components End ----------------------------------------

//-------------------------------------------Unmounting Components Start ----------------------------------------
class App extends React.Component {
  constructor() {
    super();
    console.log('Constructure');
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log('COMPONENT_DID_MOUNT');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Components_Did_Update-');
    console.log('prevState', prevState);
    console.log('state', this.state);
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  componentWillUnmount() {
    // Cleanup
    console.log('Components_Will_Unmounting');
  }
  render() {
    console.log('RENDER');
    return (
      <div className="App">
        {this.state.count}
        <button onClick={this.handleClick}>Inc Count</button>
      </div>
    );
  }
}
//-------------------------------------------Unmounting Components End ----------------------------------------

export default App;
