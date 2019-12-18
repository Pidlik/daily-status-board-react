import React from 'react';
import ReactDOM from 'react-dom';

import ChartHandler from './components/ChartHandler';
// import PostItHandler from './components/post_it_handler/post_it_handler';

/*
https://reactjs.org/docs/thinking-in-react.html

- ChartHandler: State=[{date, plus, minus}, ...]
  - Chart: Props=[{date, plus, minus}, ...]
  - ChartControls State{plus, minus} Props={update function}
    - NumberInput: State={plus}
    - NumberInput: State={minus}
    - SubmitButton

- PostItHandler
  - TBD

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

ReactDOM.render(<ChartHandler />, document.getElementById('chart-handler'));
// ReactDOM.render(<PostItHandler />, document.getElementById('right-container'));