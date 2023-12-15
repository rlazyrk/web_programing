import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import ErrorFormik from '../cart_page/formik/error_formik';
import './css/register.css';

const Register = () => {
    const navigate = useNavigate();

    const initialValues = {
        login: '',
        email: '',
        password: '',
        password2: '',
    };

    const validationSchema = Yup.object().shape({
        login: Yup.string().max(20, 'Max 20 characters').required('Login is required'),
        email: Yup.string().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, 'Invalid email').required('Email is required'),
        password: Yup.string().min(10, 'At least 10 characters').required('Password is required'),
        password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    const handleSubmit = (values, actions) => {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = {
            login: values.login,
            email: values.email,
            password: values.password,
        };
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        navigate('/login');
    };

    return (
        <div>
            <div className={'background_color register'}>
                <div className={'formik_wrapper'}>
                    <h2 className={'formik_title'}>Register</h2>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form>
                            <div className={'input'}>
                                <div>
                                    <label htmlFor="login">Login</label>
                                    <Field type="text" id="login" name="login" />
                                    <ErrorMessage name="login" component={ErrorFormik} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" id="email" name="email" />
                                    <ErrorMessage name="email" component={ErrorFormik} />
                                </div>
                                <div className={'problem_label'}>
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" id="password" name="password" />
                                    <ErrorMessage name="password" component={ErrorFormik} />
                                </div>
                                <div>
                                    <label htmlFor="password2">Repeat password</label>
                                    <Field type="password" id="phonpassword2" name="password2" />
                                    <ErrorMessage name="password2" component={ErrorFormik} />
                                </div>
                                <div>
                                    <button className={'register_button'} type="submit">
                                        Register
                                    </button>
                                </div>
                                <div>
                                    <a className={'logined'} href="/login">
                                        Already registered?
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

export default Register;
