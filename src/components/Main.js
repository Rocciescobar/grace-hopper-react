import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <main className="biography">
      <p> <strong>Grace Brewster Murray Hopper</strong> (née <strong>Murray</strong>; December 9, 1906 – January 1, 1992) was an American <a href="https://en.wikipedia.org/wiki/Computer_scientist" >computer scientist</a> and <a href="https://en.wikipedia.org/wiki/United_States_Navy" >United States Navy</a> rear admiral.[1] <mark>One of the first programmers of the Harvard Mark I computer</mark>, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today.</p>
      <p>Hopper had attempted to enlist in the Navy during <a href="https://en.wikipedia.org/wiki/World_War_II" >World War II</a>, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led by Howard H. Aiken. In 1949, she joined the <a href="https://en.wikipedia.org/wiki/Eckert%E2%80%93Mauchly_Computer_Corporation" >Eckert–Mauchly Computer Corporation</a> Eckert–Mauchly Computer Corporation and was part of the development team that designed the UNIVAC I computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into machine code that would be understood by computers. By 1952, Hopper finished her compiler, which was written for the A-0 System programming language.</p>
      <p>In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some of the first compiled languages like <a href="https://en.wikipedia.org/wiki/FLOW-MATIC" >FLOW-MATIC</a>. In 1959, she participated in the CODASYL consortium, which consulted Hopper to guide them in creating a machine-independent programming language. This led to the COBOL language, which was inspired by her idea of a language being based on English words. In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active duty. She retired from the Navy in 1986 and found work as a consultant for the <a href="https://en.wikipedia.org/wiki/Digital_Equipment_Corporation" >Digital Equipment Corporation</a>, sharing her computing experiences.</p>
      <p>Owing to her accomplishments and her naval rank, she was sometimes referred to as "Amazing Grace".[6][7] The U.S. Navy Arleigh Burke-class guided-missile destroyer <a href="https://en.wikipedia.org/wiki/USS_Hopper" >USS Hopper</a> was named for her, as was the Cray XE6 "Hopper" supercomputer at NERSC.[8] During her lifetime, Hopper was awarded 40 honorary degrees from universities across the world. In 1991, she received the National Medal of Technology. On November 22, 2016, she was posthumously awarded the <a href="https://en.wikipedia.org/wiki/Presidential_Medal_of_Freedom" >Presidential Medal of Freedom</a> by President Barack Obama.[</p>
  
      {/* Carrera */}
      <h3>Career</h3>
      <ol>
        <li>World War II</li>
        <li>UNIVAC</li>
        <li>COBOL</li>
        <li>Standards</li>
      </ol>

      {/* Frase */}
      <h2>Pharses</h2>
      <blockquote cite="http://www.azquotes.com/quote/553883">
        Humans are allergic to change. They love to say, 'We've always done it this way.' I try to fight that. That's why I have a clock on my wall that runs counter-clockwise.
      </blockquote>
      {/* Redireccionando a la página de información */}
      <a href="information.html" >See more</a>
    </main>
    );
  }
}

export default Main;