const User = (props) => {
    return (
        <div>
            <h3>Name : {props.name}</h3>
            <h3>Age : {props.age}</h3>
            <h3>Place : {props.place}</h3>
        </div>
    )
}

export default User;