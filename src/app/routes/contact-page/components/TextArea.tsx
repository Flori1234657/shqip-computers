/* eslint-disable @stylistic/js/indent */
import { FormControl, FormHelperText, FormLabel, Textarea } from '@mui/joy';
import { TbMessageCircle as MsgIcon } from 'react-icons/tb';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { ContactFormFormikInputProps } from '../types/data';

function TextArea({ formik }: ContactFormFormikInputProps) {
    const { width } = useWindowDimensions();

    return (
        <FormControl size={width > 899 ? 'md2' : 'md'}>
            <FormLabel sx={{ color: 'white', mb: '0.25rem' }}>
                Contacting Reason
            </FormLabel>
            <Textarea
                name='contactingReason'
                placeholder='Write your message here...'
                minRows={4}
                maxRows={4}
                onChange={formik.handleChange}
                value={formik.values.contactingReason}
                startDecorator={<MsgIcon />}
            />
            {formik.errors.contactingReason &&
                formik.touched.contactingReason && (
                    <FormHelperText
                        sx={(theme) => ({
                            color: theme.palette.danger[500],
                        })}
                    >
                        {formik.errors.contactingReason}
                    </FormHelperText>
                )}
        </FormControl>
    );
}

export default TextArea;
