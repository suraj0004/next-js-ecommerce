import React from 'react';
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import RedirectToHome from '~/components/RedirectToHome'

const ProtectedRoute = ({ children, global }) => {
    const authRoutes = [
        "/profile",
        "/my-account",
    ];
    const router = useRouter()
    if (!global.isAuthenticated && authRoutes.includes(router.pathname) ) {
        let toPath = (global.shop_slug)?`/${global.shop_slug}`:'/'
        return <RedirectToHome toPath={toPath} />
    }
    return (children);
  };

  const mapStateToProps = (state, ownProps) => {
    return {
      global: state.global
    }
  }
  

  export default connect(mapStateToProps)(ProtectedRoute);