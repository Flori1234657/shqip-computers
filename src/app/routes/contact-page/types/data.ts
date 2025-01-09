import { FormikProps } from 'formik';

export type ContactFormData = {
    fullName: string;
    age: number;
    email: string;
    phoneNumber: string;
    contactingReason: string;
};

export type ContactFormFormikInputProps = {
    formik: FormikProps<ContactFormData>;
};
