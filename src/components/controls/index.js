import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {plural, priceFormatting} from "../../utils";

function Controls({ orders, totalSumCart, setActive }) {  
  return (
    <div className='Controls'>
      <div className='Controls-cart'>          
        В корзине: <strong>{orders.length ? `${orders.length} ${plural(orders.length, {one: 'товар', few: 'товара', many: 'товаров'})} / ${priceFormatting(totalSumCart)}` : 'пусто'}</strong>        
      </div>  
      <div className='Controls-button'>  
        <button onClick={() => setActive(true)}>Перейти</button>
      </div>
    </div>
  );
}

Controls.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired, 
  totalSumCart: PropTypes.number,
  setActive: PropTypes.func
};

Controls.defaultProps = {
  setActive: () => {},
};

export default React.memo(Controls);
