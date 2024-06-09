import User from "./user";
import UserClass from "./UserClass";


const About = () => {
    return (
        <div>
            <h4>About Page</h4>
            <User name="Sai Anusha function" age="30" place="mumbai" />
            <UserClass name="anusha class" age="33" place="hyd" />
        </div>
    )
}

export default About;