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
        title: '100+ darslar',
        description:
            "Darslar qulay maxsus platformaga joylangan. O'zingizga qulay vaqtda ko'ra olasiz.",
        icon: (
            <PlayLessonIcon
                sx={{
                    width: { desktop: 150, tablet: 120, mobile: 100 },
                    height: { desktop: 150, tablet: 120, mobile: 100 },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '02',
        title: 'ZOOM sessiyalar:',
        description: 'Oyiga 2 martadan 8 martaga zoom uchrashuvlar o’tkazamiz',
        icon: (
            <CameraIcon
                sx={{
                    width: { desktop: 150, tablet: 120, mobile: 100 },
                    height: { desktop: 150, tablet: 120, mobile: 100 },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '03',
        title: 'Ovozli chatlar',
        description:
            'Dastur davomida savollaringizga javob berish uchun ovozli chatlar uyishtiramiz',
        icon: (
            <GraphicEqIcon
                sx={{
                    width: { desktop: 150, tablet: 120, mobile: 100 },
                    height: { desktop: 150, tablet: 120, mobile: 100 },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '04',
        title: 'Gaydlar',
        description:
            "Dasturga qo'shimcha sifatida gaydlar va cheklistlar beriladi.",
        icon: (
            <LibraryBooksIcon
                sx={{
                    width: { desktop: 150, tablet: 120, mobile: 100 },
                    height: { desktop: 150, tablet: 120, mobile: 100 },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '05',
        title: 'Kuratorlar',
        description:
            "Kuchli kuratorlar sizga natijaga erishishingizga yordam berishadi va qo'llab-quvvatlashadi.",
        icon: (
            <CastForEducationIcon
                sx={{
                    width: { desktop: 150, tablet: 120, mobile: 100 },
                    height: { desktop: 150, tablet: 120, mobile: 100 },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '06',
        title: 'Yopiq chat',
        description:
            "Telegramda siz bilan hamfikr insonlar bilan birga yopiq guruhda bo'lasiz.",
        icon: (
            <LockResetIcon
                sx={{
                    width: { desktop: 150, tablet: 120, mobile: 100 },
                    height: { desktop: 150, tablet: 120, mobile: 100 },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '07',
        title: 'Mexmonlar',
        description:
            "Dasturga 10 ta sirli mexmon spikerlar chaqirilgan. O'qish davomida ular bilan tanishasiz",
        icon: (
            <Diversity3Icon
                sx={{
                    width: { desktop: 150, tablet: 120, mobile: 100 },
                    height: { desktop: 150, tablet: 120, mobile: 100 },
                    color: 'secondary.main',
                }}
            />
        ),
    },
    {
        order: '07',
        title: 'Bonuslar',
        description:
            "Dastur davomida sizga kutilmagan ko'plab bonuslar tayyorlab qo'yganmiz.",
        icon: (
            <CardGiftcardIcon
                sx={{
                    width: { desktop: 150, tablet: 120, mobile: 100 },
                    height: { desktop: 150, tablet: 120, mobile: 100 },
                    color: 'secondary.main',
                }}
            />
        ),
    },
];
