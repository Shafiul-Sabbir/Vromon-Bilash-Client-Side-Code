import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/UseAuth';


const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="danger"/>
    }
    return (
        <div>
            <Route
            {...rest}
            render={({location})=>user.email ? children : <Redirect
            to={{
                pathname:"/register",
                state:{from : location}
            }}
            ></Redirect>

            }
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;