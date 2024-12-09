import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import Blob from 'src/assets/images/svg/about-us/blob.svg';

export default function AboutUs() {
    return (
        <Stack
            position='relative'
            sx={{
                mt: { xs: '4.25rem', md: '4.688rem' },
                gap: { xs: '1rem' },
                minHeight: { sm: '50vh', md: '70vh' },
                maxWidth: { md: '42.861rem' },
            }}
        >
            <Typography
                level='title-md'
                fontSize={{ xs: '1.2rem', md: '1.166rem' }}
                sx={(theme) => ({ color: theme.palette.primary[900] })}
            >
                About our company
            </Typography>
            <Image
                ratio='0.88/1'
                src={Blob}
                width={{ xs: '19.5rem', md: '19.131rem' }}
                objectFit='contain'
                otherStyles={{
                    position: 'absolute',
                    top: { xs: '4.875rem', sm: 0, md: '-1.7rem' },
                    left: { xs: '-1.375rem', md: '8.563rem' },
                }}
                alt='blob'
            />
            <Typography
                level='body-md'
                fontSize={{ md: '0.675rem' }}
                sx={(theme) => ({ color: theme.palette.neutral[700] })}
            >
                Lorem ipsum dolor sit amet consectetur. Leo volutpat interdum
                massa nunc. Morbi massa sit tellus velit eget tempus faucibus
                consectetur adipiscing. Dignissim adipiscing lectus duis eget
                enim tellus ac sollicitudin. Amet nec volutpat vitae diam eget.
                Tempus etiam cursus sit ut eget diam augue nec. Phasellus congue
                diam eget nulla. Gravida dignissim a nulla nisi elit venenatis.
                At magna nisi sed dui rutrum rhoncus aliquam imperdiet non.
                Molestie sed in fermentum integer mauris nunc. Tincidunt semper
                egestas a faucibus gravida. Volutpat imperdiet sit tellus
                suspendisse purus mauris vel. Ullamcorper nisi sed lectus
                egestas vel turpis congue nam. Egestas donec porttitor nunc
                pulvinar purus iaculis imperdiet. Volutpat maecenas nunc duis
                lacus lectus eu eu venenatis convallis. Nisl justo nibh nascetur
                integer fermentum. Fermentum sed lacus feugiat aliquet facilisi
                orci in nec pulvinar. Orci vel erat adipiscing aliquam. Odio
                quisque varius nulla ultricies ac feugiat diam. Arcu magna et
                suspendisse ut. Nulla in adipiscing maecenas sagittis faucibus.
                Suscipit iaculis scelerisque eget commodo sit. Nisl non id
                pharetra ac egestas vulputate non sagittis. Tincidunt quisque
                eget porttitor ut mauris aenean elementum est dolor. Nisi diam
                tristique fusce aenean commodo tortor pretium. Tellus et metus
                adipiscing nunc orci in amet ullamcorper. Habitasse feugiat
                egestas nibh cursus. Libero vitae turpis gravida sed quis ut
                etiam facilisis enim. Tellus morbi at massa porttitor. Tellus ac
                ut urna nibh nec commodo volutpat pellentesque pellentesque.
                Odio rutrum dictum varius purus malesuada mi egestas posuere
                aliquam. Sed tincidunt sed elementum ac magna commodo feugiat
                enim. Risus vel posuere urna et id sit fermentum tellus. Elit ut
                congue at sed et adipiscing sagittis magna et. Nunc blandit sit
                semper vulputate nunc vestibulum maecenas elementum arcu.
            </Typography>
        </Stack>
    );
}
