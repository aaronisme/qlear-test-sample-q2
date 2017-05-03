import mazeHelper from './mazeHelper'

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
  })
});
