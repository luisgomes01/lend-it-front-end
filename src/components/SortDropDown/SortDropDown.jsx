import {useLend} from '../../contexts/lendContext.js'
import { Container } from './SortDropDown.js';
function SortDropDown() {
  const {sortLends} = useLend();
  // const select = document.getElementById('typeSortFunction');
  var select = document.getElementById('typeSortFunction');
  if(select !== null){
    select.addEventListener('change', function() {
      var option = this.selectedOptions[0];
      var texto = option.textContent;
      sortLends(texto);
    });
  }
  // if(select===null){
  //   console.log('Não selecionado')
  // } else {
  //   var option = select.children[select.selectedIndex];
  //   var texto = option.textContent;
  //   console.log(texto)
  // }
  // var option = select.children[select.selectedIndex];
  // var texto = option.textContent;
  // console.log(texto)
  // const element = document.getElementById('typeSortFunction');
  // console.log(element);
	// let value = element.option[element.selectedIndex].value;
	// console.log(value); // pt

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