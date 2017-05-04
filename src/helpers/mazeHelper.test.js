import mazeHelper from './mazeHelper'
import initialStateHelper from './initialStateHelper'


describe('mazeHelper', () => {
  describe('reachAblePointMap', ()=> {
    it('should generate reachAblePointMap based on the input panel', () => {
      const panel = [
        [
          {top: true, right: false, bottom: false, left: true},
          {top: true, right: true, bottom: true, left: false},
        ],
        [
          {top: false, right: true, bottom: false, left: true},
          {top: true, right: false, bottom: true, left: true},
        ]
      ];

      const map = mazeHelper.reachAblePointMap(panel);
      expect(map['0 + 0']).toEqual(['1 + 0', '0 + 1']);
      expect(map['0 + 1']).toEqual(['0 + 0']);
      expect(map['1 + 0']).toEqual(['0 + 0']);
      expect(map['1 + 1']).toEqual([]);
    });
  
    it('should return empty stack if path not exist', () => {
      const panel = [
        [
          {top: true, right: false, bottom: false, left: true},
          {top: true, right: true, bottom: true, left: false},
        ],
        [
          {top: false, right: true, bottom: false, left: true},
          {top: true, right: false, bottom: true, left: true},
        ]
      ];
      
      const start = {row:0, column:0};
      const end = {row:panel.length - 1, column:panel.length - 1}
      const pathStack = mazeHelper.findPath(panel,start, end);
      expect(pathStack.length).toEqual(0);
    });
  
    it('should return empty stack if path not exist', () => {
      const panel = [
        [
          {top: false, right: true, bottom: false, left: false},
          {top: false, right: false, bottom: false, left: true},
        ],
        [
          {top: false, right: false, bottom: false, left: false},
          {top: false, right: false, bottom: false, left: false},
        ]
      ];
    
      const start = {row:0, column:0};
      const end = {row:panel.length - 1, column:panel.length - 1};
      const pathStack = mazeHelper.findPath(panel,start, end);
      expect(pathStack).toEqual(
        [ { row: 0, column: 0 },
        { row: 1, column: 0 },
        { row: 1, column: 1 } ])
    });
  })
});
