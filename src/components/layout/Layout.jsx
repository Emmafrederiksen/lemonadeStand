import "./Layout.css";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />

            <div className="content-wrapper">
                <main className="container">
                    {children}
                </main>                
            </div>
        </div>
    );
}   