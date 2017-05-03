import _ from 'lodash';
import locationHelper from './locationHelper'

const getReachablePoint = (currentPoint, panel) => {
 return ['up','down','left','right']
    .map(direction => locationHelper.generateLocation(currentPoint, panel, direction))
    .filter(possiblePoint => !(_.isEqual(currentPoint, possiblePoint)))
    .map(reachAblePoint => reachAblePoint.row.toString() + reachAblePoint.column.toString() )
};

const reachAblePointMap = (panel) => {
  const reachAblePointMap = {};
  panel.forEach((row, rowIndex) => {
      row.forEach((point, columnIndex) => {
        const currentPoint = {row: rowIndex, column: columnIndex}
        reachAblePointMap[rowIndex.toString() + columnIndex.toString()] = getReachablePoint(currentPoint,panel)
      });
  });
  
  return reachAblePointMap
};

export default {
  getReachablePoint,
  reachAblePointMap
}
