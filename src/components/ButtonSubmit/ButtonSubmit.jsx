import {Container} from './ButtonSubmit'

function ButtonSubmit({children}) {
    return (  
        <Container>
        <button type="submit" className="button-submit" >
                {children}
        </button>
        </Container>
    );
}

export default ButtonSubmit;