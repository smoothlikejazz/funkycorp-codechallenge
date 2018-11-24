import React from "react";
import connect from "react-redux/es/connect/connect";

class EmployeeThumb extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {employee} = this.props;
        return (
            <div className={`funkycorp-employee-thumb ${this.props.isSelected ? 'selected': ''}`} onClick={this.props.onClick}>
                <img className={"shadow"} src={employee.image} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {selectedEmployee} = state;
    // show the most recent selected employee
    // let isSelected = ownProps.employee.id === selectedEmployee.id;
    //FixMe  if the view changes in the panel we show state of 3 being selected which is true, yet the view will only display 1 or 2 panel items
    let isSelected = state.panelList.filter(employee => employee.id === ownProps.employee.id).length > 0;
    return {isSelected}
}

export default connect(mapStateToProps)(EmployeeThumb);