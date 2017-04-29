import React from 'react';
import { shallow } from 'enzyme';
import Panel from './Panel'
import RowContainer from '../../contianers/RowContainer';

describe('Panel', ()=> {
  
  const rows = [
    [],
    []
  ];

  it('should render Panel component with correct rows', () => {
    const PanleWarpper = shallow(<Panel panel={rows} />);
    
    expect(PanleWarpper.find(RowContainer).length).toEqual(2)
  });
  
});
