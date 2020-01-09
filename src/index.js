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

class App extends React.Component {

  componentDidMount() {
    /*
      @media (prefers-color-scheme: dark) {}
    */
    // let preferedColorScheme = window.matchMedia('(prefers-color-scheme)');
    // if (preferedColorScheme === 'not all') {
    //   console.log('Browser doesn\'t support dark mode');
    // } else {
    //   console.log(preferedColorScheme);
    // }

    // document.getElementById("btn-theme-dark").addEventListener("click", function() {
    //     document.documentElement.classList.add('color-theme-in-transition')
    //     document.documentElement.setAttribute('data-theme', "dark")
    //     window.setTimeout(function() {
    //       document.documentElement.classList.remove('color-theme-in-transition')
    //     }, 1000)
    // });

    // document.getElementById("btn-theme-light").addEventListener("click", function() {
    //     document.documentElement.classList.add('color-theme-in-transition')
    //     document.documentElement.setAttribute('data-theme', "light")
    //     window.setTimeout(function() {
    //       document.documentElement.classList.remove('color-theme-in-transition')
    //     }, 1000)
    // });

    // TODO: Set/fetch cookies
  }

  render() {
    return(
      <React.Fragment>
        <div id="chart-handler" className="left-container">
          <ChartHandler />
        </div>
        <div id="post-it-handler" className="right-container">
          <PostItHandler />
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));