import React, {Component, PropTypes} from 'react';
import RowContainer from '../../contianers/RowContainer'
import mazeHelper from '../../helpers/mazeHelper'
import './Panel.css'

const delay = func => params => new Promise(resolve => {
  setTimeout(() => {
    func(params);
    resolve();
  }, 100)
});

class Panel extends Component {
  
  constructor(props){
    super(props);
    this.start = this.start.bind(this)
  }
  
  componentDidMount(){
    this.start();
  }
  
  
  start(){
    const start = {row:0, column:0};
    const end = {row:this.props.panel.length - 1, column:this.props.panel.length - 1};
    const path = mazeHelper.findPath(this.props.panel, start, end);
    
    const that = this;
  
    path.reduce(function (acc, eachPoint) {
      return acc.then(function () {
        return delay(that.props.autoRat)(eachPoint)
      });
    }, Promise.resolve());
  }
  
  
  render(){
    const { panel } = this.props;
    return (
      <div className="panel">
        {panel.map((row, index) => <RowContainer key={index} rowId={index} cells={row} />)}
      </div>
    )
  }
  
  
}

Panel.propTypes = {
  panel: PropTypes.array.isRequired
};

export default Panel;
