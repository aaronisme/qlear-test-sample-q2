import React, {Component, PropTypes} from 'react';
import Cell from '../Cell/Cell'
import './Row.css'
const Row = ({rowId, cells, rat}) => {
  return (
    <div className="row">
      {cells.map((cell, index) => {
        if (rowId === rat.row && index === rat.column) {
          return <Cell key={cell.id} borders={cell} rat/>
        }
        return <Cell key={cell.id} borders={cell}/>
      })}
    </div>
  )
};

Row.propTypes = {
  rowId: PropTypes.number.isRequired,
  cells: PropTypes.array.isRequired,
  rat: PropTypes.object.isRequired
};

export default Row;
