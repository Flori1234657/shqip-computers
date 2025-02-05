/* eslint-disable @stylistic/js/indent */
import { Divider, Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import useRemainingTime from 'src/app/routes/home-page/hooks/useRemainingTime';

// Here find a way to not rerender all the component
function AvailableTimeCards() {
    const remainingTime = useRemainingTime();

    return (
        <Stack gap={{ xs: '1.5rem', md: '0.703rem' }} direction={{ md: 'row' }}>
            {remainingTime
                ? remainingTime.timeData.map((time) => (
                      <Stack
                          key={`time-card${time.type}`}
                          alignItems='center'
                          sx={(theme) => ({
                              p: {
                                  xs: '0.25rem 0.5rem',
                                  md: '0.118rem 0.352rem',
                              },
                              maxWidth: { xs: '3.375rem', md: '1.993rem' },
                              borderRadius: { xs: '0.5rem', md: '0.352rem' },

                              backgroundColor: theme.palette.primary[100],
                              boxShadow: '0 4px 4px 0 rgba(0, 0, 0,0.25)',
                          })}
                          component={motion.div}
                          initial={{ transformOrigin: 'top', rotateX: 90 }}
                          whileInView={{
                              rotateX: 0,
                              transition: {
                                  delay: 0.8,
                                  duration: 0.75,
                                  type: 'spring',
                                  damping: 5,
                              },
                          }}
                      >
                          <Typography
                              fontSize={{ xs: 'md', md: '0.675rem' }}
                              sx={(theme) => ({
                                  fontWeight: '700',
                                  lineHeight: '1.4',
                                  color: theme.palette.primary[900],
                              })}
                          >
                              {time.unit}
                          </Typography>
                          <Divider
                              orientation='horizontal'
                              sx={(theme) => ({
                                  width: { xs: '1.875rem', md: '1.289rem' },
                                  alignSelf: 'center',
                                  backgroundColor: theme.palette.primary[900],
                                  borderRadius: '0.5rem',
                              })}
                          />
                          <Typography
                              fontSize={{ xs: 'md', md: '0.675rem' }}
                              sx={(theme) => ({
                                  fontWeight: '700',
                                  lineHeight: '1.4',
                                  color: theme.palette.primary[900],
                              })}
                          >
                              {time.type}
                          </Typography>
                      </Stack>
                  ))
                : ''}
        </Stack>
    );
}

export default AvailableTimeCards;
