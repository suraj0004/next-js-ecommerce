import React from 'react';
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import RedirectToHome from '~/components/RedirectToHome'

const ProtectedRoute = ({ children, global }) => {
    const authRoutes = [
        "/profile"
    ];
    const router = useRouter()
    if (!global.isAuthenticated && authRoutes.includes(router.pathname) ) {
        return <RedirectToHome/>
    }
    return children;
  };

  const mapStateToProps = (state, ownProps) => {
    return {
      global: state.global
    }
  }
  

  export default connect(mapStateToProps)(ProtectedRoute);