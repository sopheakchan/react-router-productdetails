import React from 'react'
import {Formik, Form, Field, ErrorMesssage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email : Yup.string().email("Invalid Email!").required("Email is required")
})

const Register = () => {

  return (
    <div>
      
    </div>
  )
}

export default Register
