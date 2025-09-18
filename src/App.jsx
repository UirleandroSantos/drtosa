import { useState, useEffect } from "react";

import styles from './styleApp.module.css';

import { Opening } from "./components/opening/Opening.jsx";
import { Header } from "./components/header/Header.jsx";
import { Presentation } from "./components/presentation/Presentation.jsx";

export function App() {
  const [showOpening, setShowOpening] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 2000);

    return () => clearTimeout(timer);
  })
  return (
    <div>
      {showOpening && <Opening />}
      {!showOpening && 
        <section className={styles.container}>
          <Header />
          <Presentation />
        </section>
      }
      
    </div>
  )
}