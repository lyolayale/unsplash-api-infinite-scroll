import React from "react";

// internal imports
import "./normalize.css";
import "./main.css";

// images
import loader from "./loader.svg";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Unsplash API - Infinite Scroll</h1>
        <section className="loader" hidden>
          <img src={loader} alt="Loading" />
        </section>
        <section className="image-container" id="image-container">
          <img
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Nature"
          />
          <img
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Nature"
          />
          <img
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Nature"
          />
        </section>
      </>
    );
  }
}

export default App;
