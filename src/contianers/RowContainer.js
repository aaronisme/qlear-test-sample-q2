import { connect } from 'react-redux';
import Row from '../components/Row/Row'

const RowContainer = connect(({rats}) => ({rats}))(Row);

export default RowContainer;
