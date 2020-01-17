import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'

import ChartHandler from './components/ChartHandler';
import PostItHandler from './components/PostItHandler';

import * as Constants from '../src/components/constants'

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

// Chart Data
[
  OneDay: {
    label: "Monday",
    nrPlus: 7,
    nrMinus: 1,
    date: "2020-01-01",
    comment: "He funk int"
  },
  ...
]

// Post It Data
[
  PostIt: {
    pos: {
      top: "100px",
      left: "50px"
    },
    text: "teamaktiviteter...",
    key: "2020-01-17THH:mm:ss.sssZ"
  }
]

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
  constructor(props) {
    super(props);

    this.state = {
      showHelpView: false,
    }

    this.toggleshowHelpView = this.toggleshowHelpView.bind(this);
  }

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
    document.documentElement.setAttribute('data-theme', Cookies.get(Constants.COOKIES_NAME_THEME));

    document.getElementById("btn-theme-dark").addEventListener("click", function() {
        document.documentElement.classList.add('color-theme-in-transition')
        document.documentElement.setAttribute('data-theme', "dark")
        window.setTimeout(function() {
          document.documentElement.classList.remove('color-theme-in-transition')
        }, 1000)

        Cookies.set(Constants.COOKIES_NAME_THEME, "dark");
    });

    document.getElementById("btn-theme-light").addEventListener("click", function() {
        document.documentElement.classList.add('color-theme-in-transition')
        document.documentElement.setAttribute('data-theme', "light")
        window.setTimeout(function() {
          document.documentElement.classList.remove('color-theme-in-transition')
        }, 1000)

        Cookies.set(Constants.COOKIES_NAME_THEME, "light");
    });
  }

  toggleshowHelpView() {
    if(this.state.showHelpView) {
      document.getElementById("help-view").style.width = "0";
      document.getElementById("help-btn").style.right = "0";
      this.setState({showHelpView: false});
    } else {
      document.getElementById("help-view").style.width = "18%";
      document.getElementById("help-btn").style.right = "18%";
      this.setState({showHelpView: true});
    }
  }

  render() {
    return(
      <React.Fragment>
        <div id="chart-handler" className="left-container flex-column">
          <ChartHandler />
        </div>

        <div id="post-it-handler" className="right-container flex-column">
          <PostItHandler />
        </div>

        <button id="help-btn" className="help-button" onClick={this.toggleshowHelpView}>Help</button>
        <div id="help-view" className="help-view">
          {/*<a href="javascript:void(0)" className="closebtn" onClick={this.closeSettings}>&times;</a>*/ }
          <div className="theme-selection-container">
            <h2>Theme</h2>
            <button  id="btn-theme-dark">Dark</button>
            <button id="btn-theme-light">Light</button>
          </div>

          <div className="help-text">
            <h2>Shortkeys</h2>
            <div>
              {/* TODO: Find way to use Constans.HELP_TEXT instead */}
              <p>To increase/decrease plus:<br/>'{String.fromCharCode(Constants.CHART_KEY_PLUS)}' and
                  'shift+{String.fromCharCode(Constants.CHART_KEY_PLUS)}'<br/></p>
              <p>To increase/decrease minus:<br/>'{String.fromCharCode(Constants.CHART_KEY_MINUS)}' and 'shift+{String.fromCharCode(Constants.CHART_KEY_MINUS)}'</p>
              <p>`To submit data:<br/>'{String.fromCharCode(Constants.CHART_KEY_SUBMIT)}'<br/></p>
              <p>To add post-it:<br/>'{String.fromCharCode(Constants.POST_IT_KEY_ADD)}'</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));