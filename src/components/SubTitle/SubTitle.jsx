import { Container } from "./SubTitle.js";

function SubTitle({children}) {
  return ( 
    <Container>
            <h2>
              {children}
            </h2>
    </Container> 
          );
}

export default SubTitle;