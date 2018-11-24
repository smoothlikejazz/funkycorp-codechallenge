import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import style from "./sass/styles.scss";
import Footer from "./views/layout/Footer";
import About from "./views/pages/About";
import reducers from './reducers';

const FunkyCorpMainDemo = () => {
    return (
        <Provider store={createStore(reducers)}>
            <div className="funkcorp-container">
                <About/>
                <Footer/>
            </div>
        </Provider>
    );
};

ReactDOM.render(<FunkyCorpMainDemo/>, document.getElementById("main"));