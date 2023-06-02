import {memo, useCallback } from 'react';
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import './style.css';

function ProfileDetail({userData}) { 

  const cn = bem('ProfileDetail');

  return (  
    <div className={cn()}>
        <h2 className={cn('title')}>Профиль</h2>
        <p>Имя: <strong>{userData.name}</strong></p>       
        <p>Телефон: <strong>{userData.phone}</strong></p>       
        <p>email: <strong>{userData.email}</strong></p>                   
    </div>   
  )
}

// ProfileDetail.propTypes = {
//   value: PropTypes.string,
//   name: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func,
//   theme: PropTypes.string,
// }

// ProfileDetail.defaultProps = {
//   onChange: () => {},
//   type: 'text',
//   theme: ''
// }

export default memo(ProfileDetail);
