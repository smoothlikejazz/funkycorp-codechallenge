import React from "react";
import ReactDOM from "react-dom";
import style from "./sass/styles.scss";
import Footer from "./views/layout/Footer";
import About from "./views/pages/About";

const FunkyCorpMainDemo = () => {
    return (
        <div className="funkcorp-container">
            <About/>
            <Footer/>
        </div>
    );
};

ReactDOM.render(<FunkyCorpMainDemo />, document.getElementById("main"));