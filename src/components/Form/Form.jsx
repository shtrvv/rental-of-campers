import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Description,
  FormContainer,
  FormHeader,
  HeaderWrap,
  InputsWrap,
  BtnSubmit,
  Input,
  TextArea,
  Message,
} from './Form.styled';

const Form = () => {
  const [formData, setFormData] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      comment: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must contain at least 3 symbols')
        .max(15, 'Name must contain no more than 15 symbols'),
      email: Yup.string()
        .required('Email is required')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email'),
      date: Yup.date().required('Date is required'),
      comment: Yup.string(),
    }),
    onSubmit: values => {
      if (formik.isValid) {
        setFormData(values);

        formik.resetForm();
        window.location.reload();
      } else {
        return;
      }
    },
  });

  return (
    <FormContainer>
      <HeaderWrap>
        <FormHeader>Book your campervan now</FormHeader>
        <Description>
          Stay connected! We are always ready to help you.
        </Description>
      </HeaderWrap>
      <form onSubmit={formik.handleSubmit}>
        <InputsWrap>
          <Input
            type="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
            <Message>{formik.errors.name}</Message>
          ) : null}
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <Message>{formik.errors.email}</Message>
          ) : null}
          <Input
            type="date"
            name="date"
            placeholder="Booking date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            min={new Date().toISOString().split('T')[0]}
          />
          {formik.errors.date && formik.touched.date ? (
            <Message>{formik.errors.date}</Message>
          ) : null}
          <TextArea
            type="text"
            name="comment"
            placeholder="Comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
          />
        </InputsWrap>
        <BtnSubmit type="submit">Send</BtnSubmit>
      </form>
    </FormContainer>
  );
};

export default Form;
