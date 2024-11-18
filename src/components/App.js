import React from "react";

// NavBar component
function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

// Home component
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// App component that renders NavBar, Home, and About components
function App() {
  return (
    <div>
      <NavBar />  {/* Adding NavBar */}
      <Home />    {/* Adding Home */}
      <About />   {/* Adding About */}
    </div>
  );
}

export default App;
