import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <header className="d-flex justify-content-between p-3 shadow-lg">
                <Link to="/">Logo</Link>
                <div className="d-flex gap-3">
                    <Link to="/products">Products</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/verify">OTP</Link>
                </div>
            </header>
        </main>
    );
}

export default Home;
