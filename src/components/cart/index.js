import React from "react";
import PropTypes from "prop-types";
import './style.css';
import {cn as bem} from '@bem-react/classname';
import { totalSumCart } from "../../utils";
import Head from "../head";


function Cart({orders, onDeleteItem, setActive}){

  const cn = bem('Cart');

  return (
    <div className={cn()}>
      <Head title='Корзина'>           
        <div className={cn('close')}>
          <button onClick={() => setActive(false)}>Закрыть</button> 
        </div>  
      </Head>      
      <div className={cn('list List')}>
        {orders.length ?
        orders.map(item =>
          <div key={item.code} className='List-item'>
            <div className='Item'>
              <div className='Item-code'>{item.code}</div>
              <div className='Item-title'>
                {item.title}
              </div>
              <div className='Item-price'>
                {item.price + ' ₽'}
              </div>
              <div className='Item-price'>
                {item.total + ' шт'}
              </div>
              <div className='Item-actions'>
                <button onClick={() => onDeleteItem(item.code)}>Удалить</button>
              </div>              
            </div>                   
          </div>
        ): (<div className={cn('empty')}>Корзина пуста</div>)}
      </div>
      <div className={cn('total')}>
        <strong>{orders.length ? (<div><span>Итого</span> {totalSumCart(orders)} ₽</div>) : ''}</strong>
      </div>
    </div>
  )
}

Cart.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
  setActive: PropTypes.func
};

Cart.defaultProps = {
  onDeleteItem: () => {}, 
  setActive: () => {}
}

export default React.memo(Cart);
