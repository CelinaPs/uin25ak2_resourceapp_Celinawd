import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

function App() {
  return ( //https://www.w3schools.com/react/react_router.asp
    <Router> {/*Router gjør at React kan håndtere navigasjon mellom sider, uten å laste hele siden på nytt*/}
      <Layout> {/*Pakker inn hele siden, og gjør at Children kan hente inn forskjellige routes i Layout.jsx*/}
        <Routes> {/*Routes definere hvilke komponenter som skal vises for forskjellige url-er*/}
          {/*Hver Route definerer en path, og viser et spesifikt element når den pathen matches*/}
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/sanity" element={<Resources category="headless-cms" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
