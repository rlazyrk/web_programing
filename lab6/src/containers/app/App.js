import './App.css';
import Header from './header/header.js';
import HeadingSection from './heading_section/heading_section';
import VouchersSection from "./vouchers_section/vouchers_section";
import Footer from "./footer/footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <HeadingSection/>
        <VouchersSection/>
        <Footer/>
    </div>
  );
}

export default App;
