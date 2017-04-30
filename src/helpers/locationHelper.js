const directionMap = {
  'up': {row: -1, column: 0, obstacle:'bottom'},
  'down':{row:1, column:0, obstacle: 'top'},
  'left':{row:0, column: -1, obstacle:'right'},
  'right':{row:0, column: 1, obstacle: 'left'}
};

const generateLocation = (currentLocation, panel, direction) => {
  const nextRow = currentLocation.row + directionMap[direction].row;
  const newColumn = currentLocation.column + directionMap[direction].column;
  const PanelRowNumber = panel.length;
  const PanelColumnNumber = panel[0].length;
  
  if(nextRow < 0 || newColumn < 0 || nextRow >= PanelRowNumber || newColumn >= PanelColumnNumber) {
    return currentLocation
  }
  
  const nextCell = panel[nextRow][newColumn];
  if(nextCell[directionMap[direction].obstacle]){
    return currentLocation
  }
  
    return {
    row: nextRow,
    column: newColumn,
  }
};

export default {
  generateLocation
}
