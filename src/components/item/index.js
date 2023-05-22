import React from "react";
import PropTypes from "prop-types";
import './style.css';
import { priceFormatting } from "../../utils";

function Item(props){
  
  const callbacks = {    
    onAddToOrder: () => {
      props.onAddToOrder(props.item.code);
    }
  }

  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
      </div>
      <div className='Item-price'>
        {priceFormatting(props.item.price)}
      </div>
      <div className='Item-actions'>
        <button onClick={callbacks.onAddToOrder}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,      
    price: PropTypes.number
  }).isRequired,
  onAddToOrder: PropTypes.func,  
};

Item.defaultProps = {
  onAddToOrder: () => {},
}

export default React.memo(Item);
