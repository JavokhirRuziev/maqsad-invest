import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DvrIcon from '@mui/icons-material/Dvr';
import PhonelinkIcon from '@mui/icons-material/Phonelink';

export const professions = [
    {
        title: 'Kuchli',
        description: 'Uzini treding sohasida topmoqchi bulgan trederlar',
        icon: (
            <RocketLaunchIcon
                sx={{
                    color: 'common.white',
                    width: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                    height: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                }}
            />
        ),
    },
    {
        title: 'Samarali',
        description: 'Uz yunalishiga tusholmayotgan Boshlangich trederlar',
        icon: (
            <PhoneIphoneIcon
                sx={{
                    color: 'common.white',
                    width: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                    height: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                }}
            />
        ),
    },
    {
        title: 'Ishonchli',
        description: 'Minuslardan chiqmoqchi bulgan trederlar',
        icon: (
            <PsychologyIcon
                sx={{
                    color: 'common.white',
                    width: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                    height: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                }}
            />
        ),
    },
    {
        title: 'Tajribaga ega',
        description: 'Tajribasi bor lekin Shaxsiy Strategiyasi yoq trederlar',
        icon: (
            <EmojiEventsIcon
                sx={{
                    color: 'common.white',
                    width: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                    height: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                }}
            />
        ),
    },
    {
        title: 'Mutaxasis',
        description:
            'Uzini shaxsiy Strategiyasini yaratmoqchi bulgan trederlar ',
        icon: (
            <DvrIcon
                sx={{
                    color: 'common.white',
                    width: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                    height: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                }}
            />
        ),
    },
    {
        title: 'Mukammal',
        description:
            'Yillar davomida óqib hali ham natijaga chiqolmagan trederlar',
        icon: (
            <PhonelinkIcon
                sx={{
                    color: 'common.white',
                    width: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                    height: {
                        desktop: 40,
                        tablet: 35,
                        mobile: 30,
                        mobileSmall: 20,
                    },
                }}
            />
        ),
    },
];
