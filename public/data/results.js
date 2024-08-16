import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import Student from '../icons/Student';
import Groups2Icon from '@mui/icons-material/Groups2';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import UploadIcon from '@mui/icons-material/Upload';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import DevicesIcon from '@mui/icons-material/Devices';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

export const results = [
    {
        title: 'Shaxsiy kursingizni sota olasiz',
        icon: (
            <CollectionsBookmarkIcon
                sx={{ width: 40, height: 40, color: 'info.main' }}
            />
        ),
    },
    {
        title: 'Shogirdlik dasturini ocha olasiz',
        icon: <Student />,
    },
    {
        title: 'Jamoa toplashni o’rganasiz',
        icon: (
            <Groups2Icon sx={{ width: 40, height: 40, color: 'info.main' }} />
        ),
    },
    {
        title: 'Prodyuser sifatida ishlay olasiz',
        icon: (
            <FlashOnIcon sx={{ width: 40, height: 40, color: 'info.main' }} />
        ),
    },
    {
        title: 'Xizmatlaringizni qimmat sotasiz',
        icon: <UploadIcon sx={{ width: 40, height: 40, color: 'info.main' }} />,
    },
    {
        title: 'Kontent menejer bo’la olasiz',
        icon: (
            <ReceiptLongIcon
                sx={{ width: 40, height: 40, color: 'info.main' }}
            />
        ),
    },
    {
        title: 'Progrevlar ssenaristi bo’lib ishlay olasiz',
        icon: (
            <HistoryEduIcon
                sx={{ width: 40, height: 40, color: 'info.main' }}
            />
        ),
    },
    {
        title: 'Katta auditoriya yig’a olasiz',
        icon: (
            <ReduceCapacityIcon
                sx={{ width: 40, height: 40, color: 'info.main' }}
            />
        ),
    },
    {
        title: 'Samarali reelslar o’ylab topa olasiz',
        icon: (
            <OndemandVideoIcon
                sx={{ width: 40, height: 40, color: 'info.main' }}
            />
        ),
    },
    {
        title: 'Onlayn kurslar metodologi',
        icon: (
            <HourglassFullIcon
                sx={{ width: 40, height: 40, color: 'info.main' }}
            />
        ),
    },
    {
        title: 'Vebinarlar orqali sotuv qila olasiz',
        icon: (
            <DevicesIcon sx={{ width: 40, height: 40, color: 'info.main' }} />
        ),
    },
    {
        title: 'Daromadingizni 5-10 barobarga oshirasiz',
        icon: (
            <RequestQuoteIcon
                sx={{ width: 40, height: 40, color: 'info.main' }}
            />
        ),
    },
];
