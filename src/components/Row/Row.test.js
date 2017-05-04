import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';
import Cell from '../Cell/Cell';

describe('Row', ()=> {
  const cells= [
    {top:true, right:true, bottom:false, left:false},
    {top:true, right:true, bottom:true, left:true},
    {top:true, right:true, bottom:true, left:true},
  ];
  
  const rowId = 0;
  
  const rats = [{
    row:0,
    column:1
  }, {
    row:0,
    column:2
  }];
  
  it('should render Row component with correct border', () => {
    const rowWarpper = shallow(<Row rowId={rowId} cells={cells} rats={rats}/>);
    expect(rowWarpper.find(Cell).length).toEqual(3);
  });
  
  it('should pass the rat to right cell is rat passed in ', () => {
    const rowWarpper = shallow(<Row rowId={rowId} cells={cells}  rats={rats} />);
    
    const ratCells = rowWarpper.find(Cell).filter('[rat]');
    expect(ratCells.nodes[0].key).toEqual('01');
    expect(ratCells.length).toEqual(2);
    expect(ratCells.nodes[1].key).toEqual('02');
  })
});
