import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('Cell', ()=> {
  const borders = {
    top: true,
    right: false,
    bottom: true,
    left: false
  };
  
  it('should render Cell component with correct border', () => {
    const cellWarpper = shallow(<Cell borders={borders} />);
    expect(cellWarpper.find('.top .bottom .cell').length).toEqual(1);
  });
  
  it('should render Cell component with rat if passed', () => {
    const cellWarpper = shallow(<Cell borders={borders} rat />);
    expect(cellWarpper.find('.rat').length).toEqual(1);
  })
});
