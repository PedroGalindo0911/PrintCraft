import React from 'react';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import MyCatalogue from './Components/MyCatalogue';
import contents from './content';

function App() {
  return (
    <div>
      <MyNavbar />
      <div className='App'>
        {contents.map(content => (
          <MyCatalogue
            key={content.id}
            code={content.code}
            image={content.image}
            name={content.name}
            price={content.price}
            totalSales={content.totalSales}
            timeLeft={content.timeleft}
            rating={content.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
