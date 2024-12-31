import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'At least 2 characters!')
        .max(30, 'No more than 30 characters!')
        .required('This field is required!'),
    houseNumber: Yup.number()
        .min(1, 'At least 1!')
        .max(999, 'No more than 3 numbers length!')
        .required('This field is required!'),
    phoneNumber: Yup.string()
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            'Phone number is not valid!'
        )
        .required('This filed is required!'),
    email: Yup.string()
        .email('Please add an valid email!')
        .min(7, 'At least 7 characters!')
        .max(50, 'No more than 50 characters!')
        .required('This field is required!'),
    streetName: Yup.string()
        .min(7, 'At least 7 characters!')
        .max(60, 'No more than 60 characters!')
        .required('This field is reuired!'),
    country: Yup.string().required('This field is reuired!'), // This values will be autofill
    state: Yup.string().required('This field is reuired!'), // This values will be autofill
    city: Yup.string().required('This field is reuired!'), // This values will be autofill
    postalCode: Yup.number().required('This field is reuired!'), // This values will be autofill
});
