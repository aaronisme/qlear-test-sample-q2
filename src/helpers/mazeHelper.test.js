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
      const expectResult = ['10', '01'];
      const map = mazeHelper.reachAblePointMap(panel);
      expect(map['00']).toEqual(expectResult);
      expect(map['01']).toEqual(['00']);
      expect(map['10']).toEqual(['00']);
      expect(map['11']).toEqual([]);
    });
  
    it.only('should generate find the path', () => {
      const panel = initialStateHelper.initialState().panel
      // const panel = [
      //   [
      //     {top: true, right: false, bottom: false, left: true},
      //     {top: true, right: true, bottom: true, left: false},
      //   ],
      //   [
      //     {top: false, right: true, bottom: false, left: true},
      //     {top: true, right: false, bottom: true, left: true},
      //   ]
      // ];
      
      
      // const panel = [
      //   [
      //     {top: false, right: false, bottom: false, left: false},
      //     {top: false, right: false, bottom: false, left: false},
      //   ],
      //   [
      //     {top: false, right: false, bottom: false, left: false},
      //     {top: false, right: false, bottom: false, left: false},
      //   ]
      // ];
      const start = {row:0, column:0}
      const end = {row:panel.length - 1, column:panel.length - 1}
      console.log(panel, end)
      const pathStack = mazeHelper.findPath(panel,start, end);
      console.log(pathStack)
    });
  })
});
