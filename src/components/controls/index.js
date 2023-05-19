import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {plural, totalSumCart} from "../../utils";

function Controls({ orders, setActive }) {  
  return (
    <div className='Controls'>
      <div className='Controls-cart'>          
        В корзине: <strong>{orders ? `${orders.length} ${plural(orders.length, {one: 'товар', few: 'товара', many: 'товаров'})}` : ''} / {totalSumCart(orders)} ₽</strong>        
      </div>      
      <button onClick={() => setActive(true)}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired, 
  setActive: PropTypes.func
};

Controls.defaultProps = {
  setActive: () => {},
};

export default React.memo(Controls);
