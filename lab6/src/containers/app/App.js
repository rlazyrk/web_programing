import './App.css';
import Header from './header/header.js';
import HeadingSection from './heading_section/heading_section';
import VouchersSection from "./vouchers_section/vouchers_section";
import Footer from "./footer/footer";


function App() {
  return (
    <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet"/>
      <Header/>
            <div className={'hero'}>
      <HeadingSection/>
        <VouchersSection/>
        <Footer/>
            </div>
    </div>
  );
}

export default App;
