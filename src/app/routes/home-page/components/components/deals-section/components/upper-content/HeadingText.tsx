/**
      IMPORTANT NOTE
        this part of the code is open to cross-site scripting (XSS) vulnerabilities
        using dangerouslySetInnerHTML inside the span tag
 */

import { Stack, Typography } from '@mui/joy';
import useDealStore from 'src/app/routes/home-page/store/deal';

function HeadingText() {
    const deal = useDealStore((state) => state.deal);

    const title = deal?.title.replace(
        /(-?\d+%?)/,
        '<span style="color: #C41C1C;">$1</span>'
    );

    return (
        <Stack gap={{ xs: '0.5rem', md: '3.223rem' }}>
            <Typography
                level='title-sm' //\W?\d+?\W/g
                fontSize={{ md: '1.4rem' }}
                maxWidth={{ md: '9.938rem' }}
            >
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </Typography>
            <Typography
                fontSize={{ xs: 'md', md: '0.81rem' }}
                sx={(theme) => ({
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '1.3',
                    alignSelf: { xs: 'flex-end', md: 'unset' },
                    color: theme.palette.danger[700],
                })}
            >
                Offer end's in:
            </Typography>
        </Stack>
    );
}

export default HeadingText;
