import { connect } from 'react-redux';
import Panel from '../components/Panel/Panel'
import * as actions from '../actions/panel';

// const mapDispatchToProps = (dispatch) => {
//   return {
//     keyDown: (direction) => {
//       dispatch(moveRat(direction))
//     }
//   }
// };


const PanelContainer = connect(({panel}) => ({panel}), actions)(Panel);

export default PanelContainer;
