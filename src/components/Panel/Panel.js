import React, {Component, PropTypes} from 'react';
import RowContainer from '../../contianers/RowContainer'
import './Panel.css'

const keyMap = {
  '37': 'left',
  '38': 'up',
  '39': 'right',
  '40': 'down'
};

class Panel extends Component {
  
  componentDidMount(){
    document.body.addEventListener('keydown', e => {
      const direction = keyMap[e.keyCode.toString()];
      if(direction){
        this.props.keyDown(direction);
      }
    })
  }
  
  componentWillUnmount(){
    document.body.removeEventListener('keydown')
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
