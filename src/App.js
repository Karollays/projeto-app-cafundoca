import React from 'react';
import Header from './components/Header/Header.jsx';
import Article from './components/article/Article';
import Footer from './components/footer/Footer';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Article />
        <Footer />
      </div>
    );
  }
}
export default App;
