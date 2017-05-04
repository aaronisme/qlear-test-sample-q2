import React, {Component, PropTypes} from 'react';
import RowContainer from '../../contianers/RowContainer'
import mazeHelper from '../../helpers/mazeHelper'
import './Panel.css'

const keyMap = {
  '37': 'left',
  '38': 'up',
  '39': 'right',
  '40': 'down'
};

const delay = params => func => new Promise(resolve => {
  setTimeout(() => {
    func(params);
    resolve();
  }, 100)
})

class Panel extends Component {
  
  constructor(props){
    super(props);
    this.start = this.start.bind(this)
  }
  
  componentDidMount(){
    document.body.addEventListener('keydown', e => {
      const direction = keyMap[e.keyCode.toString()];
      if(direction){
        this.props.moveRat(direction);
      }
    })
  }
  
  componentWillUnmount(){
    document.body.removeEventListener('keydown')
  }
  
  start(){
    const start = {row:0, column:0};
    const end = {row:this.props.panel.length - 1, column:this.props.panel.length - 1}
    const path = mazeHelper.findPath(this.props.panel, start, end);
    
    const that = this;
  
    const promises = path.reduce(function (acc, eachPoint) {
      return acc.then(function () {
        return delay(eachPoint)(that.props.autoRat)
      });
    }, Promise.resolve());
    
    promises.then(console.log)
    
  }
  
  
  render(){
    const { panel } = this.props;
    return (
      <div className="panel">
        {panel.map((row, index) => <RowContainer key={index} rowId={index} cells={row} />)}
        <button onClick={() => this.start() }>Start</button>
      </div>
    )
  }
  
  
}

Panel.propTypes = {
  panel: PropTypes.array.isRequired
};

export default Panel;
