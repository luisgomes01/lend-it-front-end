import './ButtonSubmit.css'
function ButtonSubmit({children}) {
    return (  
        <button type="submit" className="button-submit" >
                {children}
        </button>
    );
}

export default ButtonSubmit;