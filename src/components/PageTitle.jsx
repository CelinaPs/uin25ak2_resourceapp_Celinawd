export default function PageTitle({ category }) { 
    const titles = {
      html: "HTML", //Når kategorien er "html", vises "HTML", samme med alle
      css: "CSS",
      javascript: "JavaScript",
      react: "React",
      "headless-cms": "Sanity and Headless CMS" //Måtte sette "headless-cms" i "" fordi den har en -
    };
  
    //Returnerer en <h2> med tittlelen som er definert i "titles", basert på "category" den er til
    return <h2>{titles[category]}</h2>;
  }
  