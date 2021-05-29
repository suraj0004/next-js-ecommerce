import React, {useState} from 'react';
import { useRouter } from 'next/router'
import { FaRegArrowAltCircleLeft, FaUserAlt, FaListAlt, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link'
import { doLogOut } from '~/redux/index';
import { connect } from 'react-redux';
import ProfileModal from "~/components/modals/Profile"


const index = ({ doLogOut, global }) => {

    const [profileModalShow, setProfileModal] = useState(false);

    const router = useRouter()

    const goBack = () => {
        router.back()
    }

    const singOut = () => {
        doLogOut().then(() => {
            if (global.shop_slug) {
                router.push(`/${global.shop_slug}`);
            } else {
                router.push("/")
            }
        })
    }
    return (
        <>
            <h3 className="header_h3">
                <div className="container ">
                    <button type="button" onClick={goBack} className="btn"> <FaRegArrowAltCircleLeft size="35" /> </button> Back
                </div>
            </h3>
            <div className="pt-200">
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 mb-3 ">
                        <div className="card text-center ">
                            <div className="card-body account-menu">
                                <h5 className="card-title link"> <FaListAlt /> <Link href="/my-account/orders"> My Orders</Link> </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body account-menu">
                                <h5 className="card-title link" onClick={() => setProfileModal(true)} >
                                    <FaUserAlt />  My Profile</h5>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body account-menu">
                                <h5 className="card-title link"> <FaShoppingCart /> <Link href="/cart"> My Cart</Link></h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body account-menu">
                                <h5 className="card-title link" onClick={singOut} > <FaSignOutAlt /> Sign out</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProfileModal
                show={profileModalShow}
                onHide={() => setProfileModal(false)}
            />

        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        global: state.global,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogOut: () => dispatch(doLogOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(index);