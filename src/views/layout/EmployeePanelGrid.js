import React from "react";
import EmployeeCard from "../../components/EmployeeCard";
import {CSSTransitionGroup} from 'react-transition-group';
import connect from "react-redux/es/connect/connect";

class EmployeePanelGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panelLimit: 1 //default initial panel limit
        }

    }

    onWindowResize() {
        // if window is resized ensure we notify state so the number of panels can be adjusted
        this.setState({ panelLimit: this._getResponsiveViewPanelLimit() });
    }

    componentDidMount() {
        this.setState({ panelLimit: this._getResponsiveViewPanelLimit() });
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize.bind(this));
    }

    _getResponsiveViewPanelLimit() {
        let panelLimit = 3;
        if(window.innerWidth < 900){
            panelLimit =1;
        } else if(window.innerWidth < 1200){
            panelLimit =2;
        }
        return panelLimit;
    }

    render() {
        const panelList = this.props.panelList.slice(0, this.state.panelLimit);
        const EmployeeCardList = panelList.map((employee, index) => {
            return <EmployeeCard key={employee.id} employee={employee}/>
        });

        return (
            <div>
                <CSSTransitionGroup
                    className="funkycorp-employee-panel-grid"
                    transitionName={"panel"}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1800}
                >
                    {EmployeeCardList}
                </CSSTransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {panelList, selectedEmployee} = state;
    return {
        selectedEmployee,
        panelList
    }
}

export default connect(mapStateToProps)(EmployeePanelGrid);