const initialState = () => ({
  rat:{
    row:0,
    column:0
  },
  panel:[
    [
      {top:true, right:true, bottom:false, left:false, id:'00'},
      {top:true, right:true, bottom:true, left:true, id:'01'},
    ],
    [
      {top:false, right:false, bottom:true, left:true, id:'10'},
      {top:false, right:false, bottom:true, left:false, id:'11'},
    ]
  ]
});


export default {
  initialState,
  maxRow: () => initialState().panel.length,
  maxColumn: () => initialState().panel[0].length
}
