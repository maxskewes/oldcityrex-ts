import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { NavHead } from './components/NavHead';
import { SiteFoot } from './components/SiteFoot';
import { Landing } from './routes/Landing';
import { Releases } from './routes/Releases';
import { Merch } from './routes/Merch';
import { Listen } from './routes/Listen';
import { Contact } from './routes/Contact';
import { Cart } from './routes/Cart';

function App() {
  return (
    <ChakraProvider>
      <NavHead />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='releases' element={<Releases />} />
        <Route path='merch' element={<Merch />} />
        <Route path='listen' element={<Listen />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      <SiteFoot />
    </ChakraProvider>
  );
}

export default App;
