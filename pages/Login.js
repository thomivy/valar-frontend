import React from 'react';
import Breadcrumb from "../components/common/Breadcrumb";
import LoginBox from "../components/other/account/LoginBox";

import breadcrumbimg from '../public/images/bread-bg.jpg'

const state = {
    breadcrumbimg: breadcrumbimg,
}
function Login() {
    return (
        <main className="login-page">


            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Login" img={state.breadcrumbimg} />

            <section className="form-shared padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <LoginBox title="Login to your account" subtitle="with your social network" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Login;
