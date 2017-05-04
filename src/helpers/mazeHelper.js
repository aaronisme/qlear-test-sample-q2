import _ from 'lodash';
import locationHelper from './locationHelper'

const objectToString = (obj) => `${obj.row.toString()} + ${obj.column.toString()}`;
const stringToObject = (pointString) => ({row:parseInt(pointString.split('+')[0], 10), column:parseInt(pointString.split('+')[1], 10)});

const getReachablePoint = (currentPoint, panel) => {
 return ['up','down','left','right']
    .map(direction => locationHelper.generateLocation(currentPoint, panel, direction))
    .filter(possiblePoint => !(_.isEqual(currentPoint, possiblePoint)))
    .map(reachAblePoint => objectToString(reachAblePoint) )
};

const reachAblePointMap = (panel) => {
  const reachAblePointMap = {};
  panel.forEach((row, rowIndex) => {
      row.forEach((point, columnIndex) => {
        const currentPoint = {row: rowIndex, column: columnIndex}
        reachAblePointMap[`${objectToString({row:rowIndex, column:columnIndex})}`] = getReachablePoint(currentPoint,panel)
      });
  });
  
  return reachAblePointMap
};

const findPath = (panel, startPoint, endPoint) => {
  const pathStack = [];
  const visitedPoints = [];
  pathStack.push(startPoint);
  visitedPoints.push(objectToString(startPoint));
  const panelMap = reachAblePointMap(panel);
  while (!(pathStack.length === 0 || _.isEqual(pathStack[pathStack.length - 1], endPoint)))  {
    const lastNode = pathStack[pathStack.length - 1 ];
    const reachablePoints = panelMap[objectToString(lastNode)];
    const notVisitedReachablePoints = _.difference(reachablePoints, visitedPoints);
    if(notVisitedReachablePoints.length > 0){
      pathStack.push(stringToObject(notVisitedReachablePoints[0]));
      visitedPoints.push(notVisitedReachablePoints[0]);
    }else {
     pathStack.pop();
    }
  }
  
  return pathStack
};



export default {
  findPath,
  reachAblePointMap
}
