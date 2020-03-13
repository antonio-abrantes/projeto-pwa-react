import React from 'react';
import Label from '../Label';

class NovoUsuario extends React.Component{
    render(){
        return(
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label valorInvalido='false' htmlFor="nome" texto="Quem é você?"></Label>
                </form>
            </div>
        );
    }
}

export default NovoUsuario;