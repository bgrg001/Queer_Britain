import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces();
  }, []);

  async function getPlaces() {
    const API = "http://localhost:8080/places";
    const res = await axios.get(API);
    setPlaces(res.data);
  }

  async function getPlacebylocation(location) {
    const API = "http://localhost:8080/places?location=" + location;
    const res = await axios.get(API);
    setPlaces(res.data);
  }

  async function updateLikes(id, likes) {
    console.log(id, likes);
    const API = "http://localhost:8080/places?_id=" + id + "&likes=" + likes;
    await axios.put(API);
    getPlaces();
  }

  return (
    <div className="App">
      <Header />
      <Main
        places={places}
        getPlacebylocation={getPlacebylocation}
        updateLikes={updateLikes}
      />
      <Footer />
    </div>
  );
}

export default App;

// axios is the way we call our server, so the server in express to call it to the client we use axios
