import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import CameraIcon from '@mui/icons-material/Camera';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import LockResetIcon from '@mui/icons-material/LockReset';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export const materials = [
    {
        order: '01',
        title: '40+ darslar ',
        description: 'Darslar soat 18:00 - 19:00 vaqtlarda bólib ótadi',
        icon: (
            <PlayLessonIcon
                sx={{
                    width: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    height: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '02',
        title: 'ZOOM sessiyalar:',
        description:
            'Oyiga 2 martadan 4 martagacha  zoom uchrashuvlar ótkazamiz',
        icon: (
            <CameraIcon
                sx={{
                    width: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    height: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '03',
        title: 'Ovozli chatlar',
        description:
            'Dars vaqtida savol javoblar darsni takror utib berishlar uyishtiramiz',
        icon: (
            <GraphicEqIcon
                sx={{
                    width: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    height: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '04',
        title: 'Gaydlar',
        description: 'Dars jarayonida óquv qullanmalar slaydlar beriladi',
        icon: (
            <LibraryBooksIcon
                sx={{
                    width: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    height: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '05',
        title: 'MENTORLAR',
        description:
            'Kuchli mentorlar Sizga natijaga erishishingizga yordam berishadi va qóllab - quvvatlashadi',
        icon: (
            <CastForEducationIcon
                sx={{
                    width: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    height: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '06',
        title: 'Yopiq chat',
        description:
            'Telegramda siz bilan hamfikr insonlar bilan birga yopiq guruhda bólasiz.',
        icon: (
            <LockResetIcon
                sx={{
                    width: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    height: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '07',
        title: 'Mexmonlar',
        description:
            'Dars jarayonida 3 ta sirli mexmon trederlar chaqirilgan Óqish davomida masterclass ótkazib berishadi ',
        icon: (
            <Diversity3Icon
                sx={{
                    width: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    height: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '08',
        title: 'Bonuslar',
        description:
            'Dars davomida sizga kutilmagan kóplab bonuslar tayyorlab quyganmiz.',
        icon: (
            <CardGiftcardIcon
                sx={{
                    width: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    height: {
                        desktop: 150,
                        tablet: 120,
                        mobile: 100,
                        mobileSmall: 80,
                    },
                    color: 'secondary.main',
                }}
            />
        ),
    },
];
