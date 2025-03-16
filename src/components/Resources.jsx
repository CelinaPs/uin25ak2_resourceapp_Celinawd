import resources from "./resursser";
import PageTitle from "./PageTitle";
import "../styles/Layout.scss";

//Lager en React komponent kalt "Resources", som tar inn en prop "category"
export default function Resources({ category }) {
//Filtrerer ressurser (resources) og beholder resursser som har kategori (resource.category), som matcher "category"
  const listResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <section className="resources"> {/*Lager en seksjon, og gir den et navn som jeg bruker i CSS-en*/}
      <PageTitle category={category}/> {/*Viser sidetittelen som matcher kategorien. Hentet fra "PageTitle.jsx"*/}
      <ul>
        {listResources.map((resource) => ( //.map går gjennom alle elementene i "listResources"
          <li key={resource.url}> {/*Bruker resource.url siden hver resource har en unik url */}
            <a href={resource.url}> {/*Gjør lenkene til ressursens url klikkbare*/}
              {resource.title} {/*Viser ressursens tittel som lenketekst (Hentet fra resursser.js)*/}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
