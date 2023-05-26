import {memo, useCallback} from 'react';
import ItemBasket from "../../components/item-basket";
import List from "../../components/list";
import ModalLayout from "../../components/modal-layout";
import BasketTotal from "../../components/basket-total";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";

function Basket() {

  const store = useStore();

  const select = useSelector(state => ({
    list: state.basket.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    language: state.vocabulary.language
  }));

  const callbacks = {
    // Удаление из корзины
    removeFromBasket: useCallback(_id => store.actions.basket.removeFromBasket(_id), [store]),
    // Закрытие любой модалки
    closeModal: useCallback(() => store.actions.modals.close(), [store]),
    // Перевод
    getTranslation: useCallback((string, language) => store.actions.vocabulary.getTranslation(string, language), [store])
  }

  const renders = {
    itemBasket: useCallback((item) => {
      return <ItemBasket item={item} onRemove={callbacks.removeFromBasket} onClose={callbacks.closeModal} getTranslation={callbacks.getTranslation} language={select.language}/>
    }, [callbacks.removeFromBasket, select.language]),
  };

  return (
    <ModalLayout title={callbacks.getTranslation('BASKET', select.language)} onClose={callbacks.closeModal} getTranslation={callbacks.getTranslation} language={select.language}>
      <List list={select.list} renderItem={renders.itemBasket}/>
      <BasketTotal sum={select.sum} getTranslation={callbacks.getTranslation} language={select.language}/>
    </ModalLayout>
  );
}

export default memo(Basket);
