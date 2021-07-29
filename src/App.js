import logo from './logo.svg';
import './App.css';
import React from 'react';

const dataToRender = [
  {thing1: 'Go To Work', thing2: 'Start Coding'},
  {thing1: 'Conquer World', thing2: 'Impose my will on the peoples of the world'}
]

function App() {
  // const listOfStuffToRender = []
  // for (var i in dataToRender) {
  //   var item = dataToRender[i]
  //   listOfStuffToRender.push(<DoStuff testVariable={item.thing1} moreStuff={item.thing2}/>)
  // }
  
  // const listOfStuffToRender = []
  // for (let item of dataToRender) {
  //    listOfStuffToRender.push(<DoStuff testVariable={item.thing1} moreStuff={item.thing2}/>)
  // }
  const listOfStuffToRender = dataToRender.map(item => <DoStuff key={item.thing1} testVariable={item.thing1} moreStuff={item.thing2}/>)
  
  return (
    <div className="App">
      <h1>Welcome To React</h1>
      <h2>We're happy you're here!</h2>
      {listOfStuffToRender}
      <HowLongIsTheList list={listOfStuffToRender} />
    </div>
  );
}

function HowLongIsTheList(props) {
  if (props.list.length > 2) {
    return <h3>It's pretty long</h3>
  } else {
    return <h3>It's not all that long</h3>
  }
}

function DoStuff(props) {
  const stuff = 'Stuff to do'
  return (<div>
    <h1>Stuffy{props.testVariable}</h1>
    <h2>{props.moreStuff}</h2>
    <div>{props.children}</div>
  </div>)
  
}

export default App;
