import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/Home';
import CartPage from './Components/Cart/Cart';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './Redux/store';
// import HomePage from './Components/Home/Home';
// import CartPage from './Components/Cart/Cart';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/cart" element={<CartPage />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;
