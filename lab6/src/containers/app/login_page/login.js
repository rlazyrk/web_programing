import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import Footer from "../footer/footer";
import ErrorFormik from "../cart_page/formik/error_formik";
import './css/login.css'
import {useDispatch} from "react-redux";
import {loginUser, removeAllFromCart} from "../cart_page/Redux/dispatchers";

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const initialValues = {
        login: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        login: Yup.string().required('Login is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = (values, actions) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((u) => u.login === values.login || u.email === values.login);

        if (user && user.password === values.password) {
            localStorage.setItem('userIsLogined', true);
            localStorage.setItem('currentUser', user.login)
            navigate('/');
        }
    };

    return (
        <div>
            <div className={'background_color login'}>
                <div className={'formik_wrapper'}>
                    <h2 className={'formik_title'}>Login</h2>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form>
                            <div className={'input'}>
                                <div>
                                    <label htmlFor="login">Login or Email</label>
                                    <Field type="text" id="login" name="login" />
                                    <ErrorMessage name="login" component={ErrorFormik} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" id="password" name="password" />
                                    <ErrorMessage name="password" component={ErrorFormik} />
                                </div>
                                <div>
                                    <button className={'register_button'} type="submit">
                                        Login
                                    </button>
                                </div>
                                <div>
                                    <a className={'logined'} href="/register">
                                        Register
                                    </a>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Login;
