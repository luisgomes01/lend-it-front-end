import {useLend} from '../../contexts/lendContext.js'
import { Container } from './SortDropDown.js';
function SortDropDown() {
  const {sortLends} = useLend();
  return ( 
    <Container>
    <label htmlFor="typeSortFunction"> Ordenar por: </label>
      <select name="typeSortFunction" id="typeSortFunction" >
        <option value="0" id="oldest"> antigo ao novo</option>
        <option value="1" id="newst"> novo ao antigo</option>
      </select>
    </Container> 
  );
}

export default SortDropDown;