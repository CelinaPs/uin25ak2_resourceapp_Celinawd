import { Link } from "react-router-dom";
import "../styles/Layout.scss";

export default function Nav() {
  return (
      <nav>
        {/*"Link" sørger for at vi kan navigere til de forskjellige sidene uten å laste siden på nytt*/}
        <Link to="/html">HTML</Link> {/*Navigerer til /html når denne linken klikkes. Samme med de andre*/}
        <Link to="/css">CSS</Link>
        <Link to="/javascript">JavaScript</Link>
        <Link to="/react">React</Link>
        <Link to="/sanity">Sanity and Headless CMS</Link>
      </nav>
  );
}
