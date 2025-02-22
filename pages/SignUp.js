import React from 'react';
import SignUpBox from "../components/other/account/SignUpBox";
import Header from "../components/common/Header";
import Breadcrumb from "../components/common/Breadcrumb";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/Footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from '../public/images/bread-bg.jpg'
import sectiondata from "../data/store";

const state = {
    breadcrumbimg: breadcrumbimg,
}
function SignUp() {
    return (
        <main className="signup-page">
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Sign Up" img={state.breadcrumbimg} />

            <section className="form-shared padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <SignUpBox title="Create an account!" subtitle="with your social network" />
                        </div>
                    </div>
                </div>
            </section>


        {/* Newsletter */}
        <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

        {/* Footer */}
        <Footer />

        <ScrollTopBtn />

        </main>
    );
}

export default SignUp;
