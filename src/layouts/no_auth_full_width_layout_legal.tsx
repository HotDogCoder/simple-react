import { ConnectedProps, connect } from 'react-redux'
import Footer from '../components/navigation/footer';
import MainLoading from '../components/loaders/main_loading';
import { getUserAccount, logoutUserAccount, verifyUserAccount } from '../pages/auth/redux/actions/user_account_action';
import NoAuthNavBarLegal from '../core/components/navigation/no_auth_navbar_legal';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
declare let window: any;

const NoAuthFullWidthLayout: React.FC<PropsFromRedux> = ({
  children,
  loading,
  logoutUserAccount
}:PropsFromRedux) => {

  const handleLogOut = async () => {
    await logoutUserAccount();
  }

  return (
    <div className='dark:bg-slate-700 min-h-screen'>
      <NoAuthNavBarLegal logOut={handleLogOut}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
      <Footer/>
      
      {loading && 
        (
          <div className='dark:bg-slate-800/80 bg-blue-800/80 fixed z-20 inset-0 flex items-center'>
            <MainLoading/>
          </div>
        )
      }
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  my_user: state.google_state?.user,
  user_account_state: state.user_account_state,
  google_state: state.google_state,
  loading: false
})

const mapDispatchToProps = {
  verifyUserAccount,
  getUserAccount,
  logoutUserAccount
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & {
  children?: React.ReactNode;
};;

export default connector(NoAuthFullWidthLayout);