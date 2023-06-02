import {memo, useCallback, useState} from 'react';
import useTranslate from "../../hooks/use-translate";
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import LocaleSelect from "../../containers/locale-select";
import Navigation from "../../containers/navigation";
import AuthControl from '../../containers/auth-control';
import AuthForm from '../../components/auth-form';


function AuthPage() {

  const [value, setValue] = useState({login: '', password: ''})

  const store = useStore(); 

  const select = useSelector(state => ({    
    error: state.user.error,  
  }));

  const callbacks = {
    // Авторизация
    login: useCallback((value) => {
      store.actions.user.login(value)
      setValue({login: '', password: ''})
    }, [store]),   
  }
  
  const {t} = useTranslate();

  return (
    <PageLayout>
      <AuthControl />
      <Head title={t('title')}>
        <LocaleSelect/>
      </Head>   
      <Navigation /> 
      <AuthForm
        value={value}
        setValue={setValue}
        error={select.error}
        login={callbacks.login}
      />
    </PageLayout>
  );
}

export default memo(AuthPage);
