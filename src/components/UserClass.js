import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Name : {this.props.name}</h3>
                <h3>Age : {this.props.age}</h3>
                <h3>Place : {this.props.place}</h3>
            </div>
        )
    }
}

export default UserClass;