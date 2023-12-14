import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {removeAllFromCart} from '../Redux/dispatchers';
import ErrorFormik from './error_formik';
import Footer from "../../footer/footer";
import Header from "../../header/header";
import './css/formik_page.css'


const FormikPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().max(20, 'Max 20 characters').required('First Name is required'),
        lastName: Yup.string().max(30, 'Max 30 characters').required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: Yup.string()
            .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid phone number')
            .required('Phone Number is required')
    });

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(false);
        dispatch(removeAllFromCart());
        navigate('/formik_success');
    };

    return (
        <div>
            <Header/>
            <div className={'background_color'}>
                <div className={'formik_wrapper'}>
                    <h2 className={'formik_title'}>Enter your details</h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({isSubmitting}) => (

                            <Form>
                                <div className={'input'}>
                                    <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <Field type="text" id="firstName" name="firstName"/>
                                        <ErrorMessage name="firstName" component={ErrorFormik}/>
                                    </div>
                                    <div>
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field type="text" id="lastName" name="lastName"/>
                                        <ErrorMessage name="lastName" component={ErrorFormik}/>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <Field type="email" id="email" name="email"/>
                                        <ErrorMessage name="email" component={ErrorFormik}/>
                                    </div>
                                    <div>
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <Field type="tel" id="phoneNumber" name="phoneNumber"/>
                                        <ErrorMessage name="phoneNumber" component={ErrorFormik}/>
                                    </div>

                                </div>
                                <div className={'button_wrapper'}>
                                    <button className={'formik_button'}><a className={'button_text'}
                                                                           href={'/catalog'}>Back</a></button>
                                    <button className={'formik_button'} type="submit" disabled={isSubmitting}>
                                        Continue
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default FormikPage;
