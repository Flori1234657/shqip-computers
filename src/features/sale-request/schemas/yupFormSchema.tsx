import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'At least 2 characters!')
        .max(30, 'No more than 30 characters!')
        .required('This field is required!'),
    pcModel: Yup.string()
        .min(5, 'At least 5 characters! ')
        .max(50, 'No more than 50 characters!')
        .required('This field is required!'),
    email: Yup.string()
        .email('Please add an valid email!')
        .min(7, 'At least 7 characters!')
        .max(50, 'No more than 50 characters!')
        .required('This field is required!'),
    phoneNumber: Yup.string()
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            'Phone number is not valid!'
        )
        .required('This diled is required!'),
    sellingReason: Yup.string()
        .min(100, 'At least 100 characters!')
        .max(500, 'No more than 500 characters!')
        .required('This field is reuired!'),
});
