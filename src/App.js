import Nav from "./components/Nav";
import Main from "./pages/Main";
import View from "./pages/View";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";

function App() {
  const project = useRef(null);
  const skills = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <BrowserRouter>
      <Nav
        project={project}
        skills={skills}
        about={about}
        contact={contact}
        scrollToSection={scrollToSection}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              project={project}
              skills={skills}
              about={about}
              contact={contact}
            />
          }
        />
        <Route
          path="/project1"
          element={
            <View
              link={
                "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7181975179890216961"
              }
            />
          }
        />
        <Route
          path="/project2"
          element={
            <View
              link={
                "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7165333198254673921"
              }
            />
          }
        />
        <Route
          path="/project3"
          element={
            <View
              link={
                "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7160236110114127873"
              }
            />
          }
        />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
