import { ContactFormFormikInputProps } from '../types/data';
import FirstInputs from './components/inputs/FirstInputs';
import SecondInputs from './components/inputs/SecondInputs';

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
