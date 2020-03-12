import React from 'react';

import './index.css';
import './img/logo.png';

export default function Header(){
    return(
        <div className="header pure-menu pure-menu-horizontal
        pure-menu-fixed">
            <a href="/"><img src="img/logo.png" className="logo"/></a>
            <h4 className="label">Agenda de Gentilezas</h4>
        </div>
    );
}