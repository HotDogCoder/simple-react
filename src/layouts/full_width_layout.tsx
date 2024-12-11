import { ConnectedProps, connect } from "react-redux";
import Footer from "../components/navigation/footer";
import { useEffect } from "react";
import Navbar from "../core/components/navigation/navbar";
import { RootState } from "../store";
import { Navigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import axios, { AxiosRequestConfig } from "axios";
import LoadingFullWidth from "../components/loaders/loading_full_width";
import MainLoading from "../components/loaders/main_loading";
import {
  getUserAccount,
  logoutUserAccount,
  verifyUserAccount,
} from "../pages/auth/redux/actions/user_account_action";
declare let window: any;

const FullWidthLayout: React.FC<PropsFromRedux> = ({
  children,
  loading,
  user_account_state,
  verifyUserAccount,
  getUserAccount,
  logoutUserAccount,
}: PropsFromRedux) => {
  useEffect(() => {
    const fetchData = async () => {
      console.log("verifyUserAccount");
      await verifyUserAccount();
    };
    fetchData();
  }, []);

  if (
    user_account_state?.isAuthenticated === false &&
    !localStorage.getItem("access")
  ) {
    return <Navigate to={"/login"}></Navigate>;
  }

  function handleChainChanged(_chainId: any) {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
  }

  if (window.ethereum) {
    window.ethereum.on("chainChanged", handleChainChanged);
  }

  // let location = useLocation();
  // useEffect (() => {
  //   console.log("location changed")
  //   const values = queryString.parse(location.search);
  //   const authuser = values.authuser?.toString();
  //   var code = values.code?.toString();
  //   const prompt = values.prompt?.toString();
  //   const scope = values.scope?.toString();
  //   const grant_type = values.grant_type?.toString();
  //   const load = async () => {
  //     console.log("code", values)
  //     var access = localStorage.getItem("access_token");
  //     if ( access != null && access != "" ) {
  //       await loginGoogle( {...google_state!, grant_type: grant_type, code: code, authuser: authuser, prompt: prompt?prompt:'', scope: scope?scope:''} );
  //       // const config: AxiosRequestConfig = {
  //       //   method: 'GET',
  //       //   url: 'https://www.googleapis.com/oauth2/v3/userinfo',
  //       //   headers: {
  //       //       'Authorization': `Bearer ${access}`
  //       //   }
  //       // };

  //       // await axios(config).then(response => {
  //       //   console.log('asdasdasasd', response.data);

  //       // }).catch(error => {
  //       //   console.error("Error fetching data:", error);
  //       // });
  //     } else {
  //       // await verifyGoogle( {...google_state!, code: code} );
  //       // await userGoogle( {...google_state!, code: code});
  //     }
  //   }
  //   load();
  // }, [location]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //       if (localStorage.getItem("account")) {
  //         loadWeb3();
  //         my_user ? <></>:get_my_user_details()
  //       }
  //     };
  //     fetchData();

  //     if (window.ethereum) {
  //       get_network_id();
  //     }
  // }, []);

  const handleLogOut = async () => {
    await logoutUserAccount();
  };

  return (
    <div className="dark:bg-slate-700 min-h-screen">
      <Navbar logOut={handleLogOut} />
      <Footer />
      {loading && (
        <div className="dark:bg-slate-800/80 bg-blue-800/80 fixed z-20 inset-0 flex items-center">
          <MainLoading />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  user_account_state: state.user_account_state,
  loading:
    state.contact_state?.loading ||
    state.user_account_state?.loading
});

const mapDispatchToProps = {
  verifyUserAccount,
  getUserAccount,
  logoutUserAccount,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & {
  children?: React.ReactNode;
};

export default connector(FullWidthLayout);
