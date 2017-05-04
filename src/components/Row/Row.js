import React, {Component, PropTypes} from 'react';
import Cell from '../Cell/Cell'
import './Row.css'

const getRatsInCurrentRow = (rats, rowId) => rats.filter(rat => rat.row === rowId);
const haveRatInColumn = (rats, column) => !!rats.filter(rat => rat.column === column).length;

class Row extends Component {
  
  render(){
    const {rowId, cells, rats} = this.props;
    const ratsInCurrentRow = getRatsInCurrentRow(rats, rowId);
    return (
      <div className="row">
        {cells.map((cell, index) => {
          if (ratsInCurrentRow.length > 0 && haveRatInColumn(ratsInCurrentRow, index)) {
            return <Cell key={`${rowId}${index}`} borders={cell} rat/>
          }
          return <Cell key={`${rowId}${index}`} borders={cell}/>
        })}
      </div>
    )
  }
}

Row.propTypes = {
  rowId: PropTypes.number.isRequired,
  cells: PropTypes.array.isRequired,
  rats: PropTypes.array.isRequired
};

export default Row;
