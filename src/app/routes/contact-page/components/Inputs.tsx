import FirstInputs from './components/inputs/FirstInputs';
import SecondInputs from './components/inputs/SecondInputs';
import { ContactFormFormikInputProps } from '../interface/contactFormFormik';

export default function Inputs({ formik }: ContactFormFormikInputProps) {
    return (
        <>
            <FirstInputs formik={formik} />

            {/** Seperation of inputs because of layout 
                properly displayed as shown in the 
                figma design 🍥 */}

            <SecondInputs formik={formik} />
        </>
    );
}
