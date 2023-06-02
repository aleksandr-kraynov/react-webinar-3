import {memo} from 'react';
import useTranslate from "../../hooks/use-translate";
import useSelector from "../../hooks/use-selector";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import LocaleSelect from "../../containers/locale-select";
import Navigation from "../../containers/navigation";
import AuthControl from '../../containers/auth-control';
import ProfileDetail from '../../components/profile-detail';
import { Navigate } from 'react-router-dom';

function ProfilePage() {
 
  const select = useSelector(state => ({
    userData: state.user.userData, 
    isAuth: state.user.isAuth, 
  })); 

  if (!select.isAuth) {
    return <Navigate to='/login' />   
  }
  
  const {t} = useTranslate();

  return (
    <PageLayout>
      <AuthControl />
      <Head title={t('title')}>
        <LocaleSelect/>
      </Head>   
      <Navigation />  
      <ProfileDetail userData={select.userData}/>   
    </PageLayout>
  );
}

export default memo(ProfilePage);
