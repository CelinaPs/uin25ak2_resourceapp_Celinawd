import "../styles/Layout.scss"; 
import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <Nav/>
            </header>
            <main>{children}</main> 
        </div> //Children henter inn innholdet fra Routes i App.jsx
    );
}
