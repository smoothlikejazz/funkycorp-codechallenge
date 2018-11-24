import React from "react";


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date().getFullYear();
    }

    render() {
        return (
            <footer className="copyright">&copy; {this.date} Awesome FunkyCorp Demo.</footer>
        );
    }
}