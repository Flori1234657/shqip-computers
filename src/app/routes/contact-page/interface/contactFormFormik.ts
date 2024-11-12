import { FormikProps } from 'formik';

export interface ContactFormFormikInputProps {
    formik: FormikProps<{
        fullName: string;
        age: number;
        email: string;
        phoneNumber: string;
        contactingReason: string;
    }>;
}
