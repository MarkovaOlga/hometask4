
import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
    return ( 
        <div>
            <h1>О нас</h1>
            <Link to='/'>Вернуться на главную страницу</Link>
        </div>
     );
}

export default AboutPage;