import {
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Textarea,
} from '@mui/joy';
import { SaleRequestInputs } from './Inputs';
import { TbMessageCircle as MsgIcon } from 'react-icons/tb';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

function TextArea({ formik }: SaleRequestInputs) {
    const { width } = useWindowDimensions();

    return (
        <Grid width='100%'>
            <FormControl size={width > 899 ? 'md2' : 'md'}>
                <FormLabel sx={{ color: 'white', mb: '0.25rem' }}>
                    Selling Reason
                </FormLabel>
                <Textarea
                    name='sellingReason'
                    placeholder='Only serious sellers...'
                    minRows={4}
                    maxRows={4}
                    onChange={formik.handleChange}
                    value={formik.values.sellingReason}
                    startDecorator={<MsgIcon />}
                />
                {formik.errors.sellingReason &&
                    formik.touched.sellingReason && (
                    <FormHelperText
                        sx={(theme) => ({
                            color: theme.palette.danger[500],
                        })}
                    >
                        {formik.errors.sellingReason}
                    </FormHelperText>
                )}
            </FormControl>
        </Grid>
    );
}

export default TextArea;
