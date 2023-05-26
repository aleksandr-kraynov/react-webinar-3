import {cn as bem} from "@bem-react/classname";
import { useCallback } from "react";
import useSelector from "../../store/use-selector";
import useStore from "../../store/use-store";
import './style.css';

function Loader() {

  const store = useStore();

  const select = useSelector(state => ({
    language: state.vocabulary.language
  }));     

  const callbacks = {         
    // Перевод
    getTranslation: useCallback((string, language) => store.actions.vocabulary.getTranslation(string, language), [store])
  }  

  const cn = bem('Loader'); 

  return (
    <div className={cn()}>
      <p className={cn('message')}>{callbacks.getTranslation('LOADING', select.language)}...</p>
    </div>
  )
}

export default Loader;
