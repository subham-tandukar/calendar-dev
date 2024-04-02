import Link from "next/link";
import { FaGoogle, FaTwitter } from "react-icons/fa";
export default async function Register() {
    return (
        <>
            <div className="main-section">

                <div className="ok-container">
                    <div className="login-page-wrapper">
                        <form className="ok-user-login">
                            <div className="ok-conv-login-box">
                                <h3>Register</h3>
                                <div className="frm-fld">
                                    <input type="text" placeholder="Username" className="username" />
                                </div>
                                <div className="frm-fld">
                                    <input type="email" placeholder="Email" className="username" />
                                </div>
                                <div className="frm-fld">
                                    <input type="password" placeholder="Password" className="password" />
                                </div>
                                <div className="frm-fld">
                                    <input type="password" placeholder="Confirm Password" className="password" />
                                </div>
                                <div className="frm-fld">
                                    <input type="text" placeholder="Display Name" className="username" />
                                </div>
                                <div className="frm-fld">
                                    <input type="number" placeholder="Phone/Mobile" className="username" />
                                </div>

                                <div className="ok-btn-wrapper">
                                    <button type="submit" className="btn primary primary-gradient rounded w-full">Sign up</button>
                                    <span>Already have an account?</span> <Link href="/login" className="ok-signup-trigger">Signin Now</Link>
                                </div>
                                <div className="form-message form-response-message"></div>
                                <div className="ok-login-with-social">
                                    <h5>Or use Social Media? </h5>
                                    <a href="#" className="with-google ok-social-login-trigger">
                                        <FaGoogle />
                                        <span>Google</span>
                                    </a>
                                    <a href="#" className="with-tw ok-social-login-trigger">
                                        <FaTwitter />
                                        <span>Twitter</span>
                                    </a>
                                </div>
                                <div className="ok-login-desc">
                                    <h4>कृपया ध्यान दिनुहोस्:</h4>
                                    <ul>
                                        <li>अब तपाइले कमेन्ट गर्नका लागि अनिवार्य रजिस्ट्रेसन गर्नुपर्ने छ ।</li>
                                        <li>आफ्नो इमेल वा गुगल, फेसबुक र ट्वीटरमार्फत् पनि सजिलै लगइन गर्न सकिने छ ।</li>
                                        <li>यदि वास्तविक नामबाट कमेन्ट गर्न चाहनुहुन्न भने डिस्प्ले नेममा सुविधाअनुसारको निकनेम र प्रोफाइल फोटो परिवर्तन गर्नुहोस् अनि ढुक्कले कमेन्ट गर्नहोस्, तपाइको वास्तविक पहिचान गोप्य राखिने छ । </li>
                                        <li>रजिस्ट्रेसनसँगै बन्ने प्रोफाइमा तपाइले गरेका कमेन्ट, रिप्लाई, लाइक/डिसलाइकको एकमुष्ठ बिबरण हेर्नुहोस् ।</li>
                                    </ul>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
