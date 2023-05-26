import { useState } from 'react';
import Main from "./main";
import Basket from "./basket";
import useStore from "../store/use-store";
import useSelector from "../store/use-selector";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Product from './product';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {  

  const [isFetching, setIsFetching] = useState(false)

  const activeModal = useSelector(state => state.modals.name);

  return (
    <BrowserRouter>         
      <Routes>
        <Route path='/' element={<Main isFetching={isFetching} setIsFetching={setIsFetching} />} />
        <Route path='/product/:id' element={<Product isFetching={isFetching} setIsFetching={setIsFetching} />} />
      </Routes>        
      {activeModal === 'basket' && <Basket/>}      
    </BrowserRouter>
  );
}

export default App;
