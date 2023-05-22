import React from "react";
import PropTypes from "prop-types";
import '../../item/style.css';

function ItemCart(props){
  
  const callbacks = {    
    onDeleteItem: () => {
      props.onDeleteItem(props.item.code);
    }
  } 

  return (
    <div className='Item'>
        <div className='Item-code'>{props.item.code}</div>
        <div className='Item-title'>
            {props.item.title}
        </div>
        <div className='Item-price'>
            {props.item.price + ' ₽'}
        </div>
        <div className='Item-price'>
            {props.item.total + ' шт'}
        </div>
        <div className='Item-actions'>
            <button onClick={callbacks.onDeleteItem}>Удалить</button>
        </div>              
    </div>                   
  );
}

ItemCart.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,      
    price: PropTypes.number,
    total: PropTypes.number
  }).isRequired,
  onDeleteItem: PropTypes.func,  
};

ItemCart.defaultProps = {
  onDeleteItem: () => {},
}

export default ItemCart;
