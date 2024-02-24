import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <h2>Page not found</h2>
            <Link to='/'>
                Back to main page
            </Link>
        </div>
    );
};

export default Page404;