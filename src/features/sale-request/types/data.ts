import { FormikProps } from 'formik';

export type SaleRequestData = {
    fullName: string;
    pcModel: string;
    email: string;
    phoneNumber: string;
    sellingReason: string;
};

export type SaleRequestInputs = {
    formik: FormikProps<SaleRequestData>;
};
