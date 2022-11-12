import React from 'react';
import s from './App.module.css';
import Booking from './components/booking/Booking';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Support from './components/support/Support';

function App() {
  return (
    <main>
        <Header/>
        <Promo/>
        <div className={s.container}>
            <Booking />
            <Support />
            <Footer />
        </div>
    </main>
  ); 
}

export default App;
