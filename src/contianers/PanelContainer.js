import { connect } from 'react-redux';
import Panel from '../components/Panel/Panel'
import moveRat from '../actions/panel';

const mapDispatchToProps = (dispatch) => {
  return {
    keyDown: (direction) => {
      dispatch(moveRat(direction))
    }
  }
};


const PanelContainer = connect(({panel}) => ({panel}), mapDispatchToProps)(Panel);

export default PanelContainer;
