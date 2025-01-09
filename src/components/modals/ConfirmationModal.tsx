import {
    Button,
    Checkbox,
    Modal,
    ModalDialog,
    Stack,
    Typography,
} from '@mui/joy';
import { motion } from 'motion/react';
import { modalSimpleVariants } from 'src/animations/shared';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

interface Props {
    modalVisibility: boolean | 'dont-show-again';
    text: string;
    yesIcon: React.ReactNode;
    noIcon: React.ReactNode;
    yesAction: () => void;
    noAction: () => void;
    checkboxAction: () => void;
}

export default function ConfirmationModal({
    modalVisibility,
    text,
    noIcon,
    yesIcon,
    yesAction,
    noAction,
    checkboxAction,
}: Props) {
    const { width } = useWindowDimensions();

    return (
        <Modal
            open={
                modalVisibility !== 'dont-show-again' ? modalVisibility : false
            }
        >
            <ModalDialog
                sx={(theme) => ({
                    bgcolor: theme.palette.primary[900],
                    borderRadius: { xs: '0.75rem', md: '0.469rem' },
                    boxShadow: theme.shadow.overlayModal,
                    p: { xs: '1rem', md: '0.938rem' },
                    minWidth: 'fit-content',
                })}
                component={motion.div}
                variants={modalSimpleVariants}
                initial='initial'
                animate='animate'
            >
                <Stack
                    gap={{ xs: '1rem', md: '0.938rem' }}
                    maxWidth={{ md: '12.158rem' }}
                >
                    <Typography
                        level='title-md'
                        fontSize={{ xs: '1rem', md: '0.809rem' }}
                        fontWeight='400'
                        sx={{
                            color: 'white',
                            width: { xs: '15rem', md: 'unset' },
                        }}
                    >
                        {text}
                    </Typography>
                    <Stack gap={{ xs: '0.75rem', md: '0.352rem' }}>
                        <Stack
                            direction='row'
                            gap={{ xs: '0.75rem', md: '0.469rem' }}
                        >
                            <Button
                                variant='outlined'
                                color='danger'
                                endDecorator={yesIcon}
                                size={width < 900 ? 'md' : 'md2'}
                                onClick={yesAction}
                            >
                                Yes
                            </Button>
                            <Button
                                endDecorator={noIcon}
                                size={width < 900 ? 'md' : 'md2'}
                                onClick={noAction}
                            >
                                No
                            </Button>
                        </Stack>
                        <Checkbox
                            color='success'
                            size={width < 900 ? 'sm' : 'md2'}
                            sx={(theme) => ({
                                color: theme.palette.primary[200],
                                fontFamily: 'Poppins',
                            })}
                            label="Don't ask me again"
                            onChange={checkboxAction}
                        />
                    </Stack>
                </Stack>
            </ModalDialog>
        </Modal>
    );
}
