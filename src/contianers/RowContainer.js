import { connect } from 'react-redux';
import Row from '../components/Row/Row'

const RowContainer = connect(({rat}) => ({rat}))(Row);

export default RowContainer;
