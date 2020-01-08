import React from 'react';
import ReactDOM from 'react-dom';

import ChartHandler from './components/ChartHandler';
import PostItHandler from './components/PostItHandler';

/*
https://reactjs.org/docs/thinking-in-react.html

- ChartHandler: State=[{label, nrPlus, nrMinus, date}, ...]
  - Chart: Props=[{date, nrPlus, nrMinus}, ...]
  - ChartInput State{nrPlus, nrMinus} Props={update function}
    - NumberInput: Props={nrPlus}
    - NumberInput: Props={nrMinus}
    - SubmitButton: Props={onSubmit = update function}

- PostItHandler: State=[{ nrPostIts, Postits{ position, text } }]
  - PostItContainer: Props={ [PostIts, ...] }
    - [PostIt, ...]
  - PostItControls: Props={nrPostIts, add/delete post it function}
    - AddPostItButton: Props={add post it function}
    - Trashcan: Props={delete post it function}

Deploy to GitHub Pages:
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

Chart JS:
https://www.chartjs.org/
https://www.chartjs.org/samples/latest/charts/bar/stacked.html

Chart JS & React:
https://www.createwithdata.com/react-chartjs-dashboard/

React refs:
https://reactjs.org/docs/forwarding-refs.html
https://blog.logrocket.com/how-to-use-react-createref-ea014ad09dba/

*/

/*
For ChartController maybe?
https://reactpatterns.com/

handleEvent({type}) {
  switch(type) {
    case "click":
    case "mouseenter":
      return this.setState({ hovered: true })
    case "mouseleave":
      return this.setState({ hovered: false })
    default:
      return console.warn(`No case for event type "${type}"`)
  }
}

class ControlledNameInput extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return (
      <input
        value={this.state.name}
        onChange={e => this.setState({ name: e.target.value })}
      />
    );
  }
}

*/

if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
  console.log('Browser doesn\'t support dark mode');
} else {
  console.log(window.matchMedia('(prefers-color-scheme)').media);
}

class App extends React.Component {

  componentDidMount() {
    document.getElementById("btn-theme-dark").addEventListener("click", function() {
      document.documentElement.classList.add('color-theme-in-transition')
      document.documentElement.setAttribute('data-theme', "dark")
      window.setTimeout(function() {
        document.documentElement.classList.remove('color-theme-in-transition')
      }, 1000)

    });

    document.getElementById("btn-theme-light").addEventListener("click", function() {
      document.documentElement.classList.add('color-theme-in-transition')
      document.documentElement.setAttribute('data-theme', "light")
      window.setTimeout(function() {
        document.documentElement.classList.remove('color-theme-in-transition')
      }, 1000)
    });
  }

  render() {
    return(
      <React.Fragment>
        <div id="chart-handler" class="left-container">
          <ChartHandler />
        </div>
        <div id="post-it-handler" class="right-container">
          <PostItHandler />
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));