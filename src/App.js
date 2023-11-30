// import React , { useheaderState }  from 'react';
import React , { useEffect, useState, useRef }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './tailwind.css';

import Navbar from './components/Navbar'; // Navigation Bar の略
import Kadai from './components/Kadai';

import Poke from './components/Poke';
import Pokesute from './components/Pokesute';

function App() {

  // リロードするたびに動く
  const [isAuth, setIsAuth] = useState(localStorage.getItem("IsAuth"));
  // isAuthenticated の略で、ユーザー認証の有無を示すための変数や関数の名前として使用される
  // 最初は認証をしていないので、falseでOK

  // Homeページ用の状態
  const [homeMessage, setHomeMessage] = useState("Welcome to the Home Page!");
  // Aboutページ用の状態
  const [aboutMessage, setAboutMessage] = useState("This is the About Page.");
  // Contactページ用の状態
  const [contactMessage, setContactMessage] = useState("You can contact us here.");
  // gs_kadai06ページ用の状態
  const [kadai06Message, setKadai06Message] = useState("Kadai06");
  // pokeページ用の状態
  const [pokeMessage, setPokeMessage] = useState("Pokemon");
  // pokeページ用の状態
  const [pokesuteMessage, setPokesuteMessage] = useState("Pokemon");
  
  return (
    <Router>
      <Navbar isAuth={ isAuth }/>
      <div>
        {/* <h1><a href="/Navbar">Navbar</a></h1> */}
        {/* <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav> */}

        <Routes>

          {/* HomeコンポーネントにhomeMessageを渡す */}
          <Route path="/" element={<Home message={homeMessage} />} />

          {/* AboutコンポーネントにaboutMessageを渡す */}
          <Route path="/about" element={<About message={aboutMessage} />} />

          {/* ContactコンポーネントにcontactMessageを渡す */}
          <Route path="/contact" element={<Contact message={contactMessage} />} />

          {/* gs_kadai06コンポーネントにcontactMessageを渡す */}
          <Route path="/kadai" element={<Kadai message={kadai06Message} />} />

          {/* gs_kadai06コンポーネントにcontactMessageを渡す */}
          <Route path="/poke" element={<Poke message={pokeMessage} />} />

          <Route path="/pokesute" element={<Pokesute message={pokesuteMessage} />} />


          <Route element={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

