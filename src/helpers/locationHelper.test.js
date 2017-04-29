import initialStateHelper from './initialStateHelper';
import locationHelper from './locationHelper';

describe.only('locationHelper', () => {
  describe('#generateLocation', () => {
    describe('in the border', () => {
      
      beforeEach(() => {
        const mockMaxRow = jest.fn(() => 3);
        const mockMaxColumn = jest.fn(() => 3);
        initialStateHelper.maxRow = mockMaxRow;
        initialStateHelper.maxColumn = mockMaxColumn;
      });
      
      afterEach(() => {
        initialStateHelper.maxRow.mockClear()
        initialStateHelper.maxColumn.mockClear()
      });
      
      const currentLocation = {
        row: 1,
        column: 1
      };
      
      const openCell = {top: false, right: false, bottom: false, left: false}
      
      const panel = Array(3).fill(Array(3).fill(openCell));
      
      it('should move up when press up key', () => {
        const direction = 'up';
        
        const resultLocation = {
          row: 0,
          column: 1
        };
        
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
      
      it('should move down when press down key', () => {
        const direction = 'down';
        
        const resultLocation = {
          row: 2,
          column: 1
        };
        
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
      
      it('should move left when press left key', () => {
        const direction = 'left';
        
        const resultLocation = {
          row: 1,
          column: 0
        };
        
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
      
      it('should move right when press right key', () => {
        const direction = 'right';
        
        const resultLocation = {
          row: 1,
          column: 2
        };
        
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      })
    });
    
    describe('on the border', () => {
      
      beforeEach(() => {
        const mockMaxRow = jest.fn(() => 2);
        const mockMaxColumn = jest.fn(() => 2);
        initialStateHelper.maxRow = mockMaxRow;
        initialStateHelper.maxColumn = mockMaxColumn;
      });
      
      afterEach(() => {
        initialStateHelper.maxRow.mockClear();
        initialStateHelper.maxColumn.mockClear();
      });
      
      const openCell = {top: false, right: false, bottom: false, left: false}
      
      const panel = Array(2).fill(Array(2).fill(openCell));
      
      it('should keep location when press up key', () => {
        const currentLocation = {
          row: 0,
          column: 0
        };
        
        const direction = 'up';
        const resultLocation = {
          row: 0,
          column: 0
        };
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
      it('should keep location when press down key', () => {
        const currentLocation = {
          row: 1,
          column: 0
        };
        
        const direction = 'down';
        const resultLocation = {
          row: 1,
          column: 0
        };
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
      
      it('should keep location when press left key', () => {
        const currentLocation = {
          row: 1,
          column: 0
        };
        
        const direction = 'left';
        const resultLocation = {
          row: 1,
          column: 0
        };
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
      
      it('should keep location when press right key', () => {
        const currentLocation = {
          row: 0,
          column: 1
        };
        
        const direction = 'right';
        const resultLocation = {
          row: 0,
          column: 1
        };
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
    })
    
    describe('with obstacle', () => {
      
      beforeEach(() => {
        const mockMaxRow = jest.fn(() => 2);
        const mockMaxColumn = jest.fn(() => 2);
        initialStateHelper.maxRow = mockMaxRow;
        initialStateHelper.maxColumn = mockMaxColumn;
      });
      
      afterEach(() => {
        initialStateHelper.maxRow.mockClear();
        initialStateHelper.maxColumn.mockClear();
      });
      
      it('should keep location if up have a obstacle when press up key', () => {
        const panel = [
          [
            {top: true, right: true, bottom: true, left: true},
            {}
          ],
          [{}, {}]
        ];
        
        const currentLocation = {
          row: 1,
          column: 0
        };
        
        const direction = 'up';
        const resultLocation = {
          row: 1,
          column: 0
        };
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
      
      it('should keep location if down have a obstacle when press down key', () => {
        const panel = [
          [
            {},
            {}
          ],
          [
            {top: true, right: true, bottom: true, left: true},
            {}
          ]
        ];
        
        
        const currentLocation = {
          row: 0,
          column: 0
        };
        
        const direction = 'down';
        const resultLocation = {
          row: 0,
          column: 0
        };
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
      
      it('should keep location if left have a obstacle when press left key', () => {
        const panel = [
          [
            {top: true, right: true, bottom: true, left: true},
            {}
          ],
          [{}, {}]
        ];
        
        const currentLocation = {
          row: 0,
          column: 1
        };
        
        const direction = 'left';
        const resultLocation = {
          row: 0,
          column: 1
        };
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
      
      it('should keep location if right have a obstacle when press down key', () => {
        const panel = [
          [
            {},
            {top: true, right: true, bottom: true, left: true},
          ],
          [{}, {}]
        ];
        
        
        const currentLocation = {
          row: 0,
          column: 0
        };
        
        const direction = 'right';
        const resultLocation = {
          row: 0,
          column: 0
        };
        expect(locationHelper.generateLocation(currentLocation, panel, direction)).toEqual(resultLocation)
      });
    })
    
  })
});
