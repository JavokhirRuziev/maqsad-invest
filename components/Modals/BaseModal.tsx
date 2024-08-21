import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Close from '@mui/icons-material/Close';
import { error, success } from '@/utils/notifications';

interface UserInfo {
    name: string;
    phone_number: string;
}

const BasicModal = ({
    children,
    open,
    handleClose,
}: {
    children: React.ReactNode;
    open: boolean;
    handleClose: () => void;
}) => {
    const [userInfo, setUserInfo] = React.useState<UserInfo>({
        name: '',
        phone_number: '+998',
    });

    const handleChange = (param: string, e: { target: { value: any } }) => {
        setUserInfo({
            ...userInfo,
            [param]: e.target.value,
        });
    };

    const formatPhoneNumber = (input: string) => {
        const cleanInput = input.replace(/[^\d+]/g, '');
        if (cleanInput.startsWith('+998')) {
            let formatted = cleanInput.replace(
                /(\+998)(\d{2})(\d{3})(\d{2})(\d{2})/,
                '$1 $2 $3 $4 $5'
            );
            return formatted.length > 17 ? formatted.slice(0, 17) : formatted;
        } else {
            return '+998';
        }
    };

    const handleInputChange = (e: { target: { value: any } }) => {
        const input = e.target.value;
        const formattedInput = formatPhoneNumber(input);
        handleChange('phone_number', { target: { value: formattedInput } });
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const text = `<b>Yangi lead</b>\n\n<b>Ismi:</b> ${userInfo.name}\n<b>Telefon raqami:</b> ${userInfo.phone_number}`;
        fetch(
            'https://api.telegram.org/bot7167846823:AAFDRoi3JIg7mqAe6pCD4LRlOgZjnxNQ1lo/sendMessage',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: '-1002241520589',
                    text: text,
                    parse_mode: 'HTML',
                }),
            }
        )
            .then((res) => res.json())
            .then((res) => {
                success();
                handleClose();
                setUserInfo({
                    name: '',
                    phone_number: '+998',
                });
            })
            .catch((err) => error());
    };

    return (
        <>
            {children}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Box position={'relative'}>
                        <Box sx={iconWrapperStyles} onClick={handleClose}>
                            <Close
                                sx={{ width: 30, height: 30, color: 'white' }}
                            />
                        </Box>
                        <Box sx={vipTarifWrapperStyles}>
                            <Typography variant='h3' sx={tarifTextStyles}>
                                TARIF
                            </Typography>
                            <Typography variant='h1' sx={titleStyles}>
                                Vip
                            </Typography>
                            <Divider sx={dividerStyles} />
                        </Box>
                        <Box sx={bottomWrapperStyles}>
                            <form onSubmit={onSubmit}>
                                <Typography variant='h3' textAlign={'center'}>
                                    VIP TARIFIGA RO'YXATDAN O'TISH
                                </Typography>
                                <Typography
                                    variant='body1'
                                    textAlign={'center'}
                                >
                                    Ma'lumotlaringizni qoldiring, siz bilan tez
                                    orada bog'lanamiz
                                </Typography>
                                <TextField
                                    placeholder='Ismingiz'
                                    name='name'
                                    value={userInfo.name}
                                    onChange={(e) => handleChange('name', e)}
                                    required
                                />
                                <TextField
                                    placeholder='+99893 514 16 02'
                                    name='phone'
                                    value={userInfo.phone_number || '+998'}
                                    onChange={handleInputChange}
                                    inputProps={{
                                        maxLength: 17,
                                    }}
                                    required
                                />
                                <Button sx={buttonStyles} type='submit'>
                                    Ro'yxatdan o'tish
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default BasicModal;

const iconWrapperStyles = {
    position: 'absolute',
    top: 30,
    right: 30,
    cursor: 'pointer',
};

const bottomWrapperStyles = {
    form: {
        p: '40px 45px',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
    },
};

const buttonStyles = {
    p: '0px 30px !important',
    fontSize: '25px !important',
    background: '#051d19',
    ':hover': {
        background: '#051d19',
    },
};

const vipTarifWrapperStyles = {
    py: { desktop: 5, tablet: 4, mobile: 3, mobileSmall: 2 },
    bgcolor: 'common.black',
};
const tarifTextStyles = {
    color: 'secondary.light',
    textAlign: 'center',
    mb: 3,
};

const titleStyles = {
    color: 'info.light',
    textAlign: 'center',
    mb: 3,
    textTransform: 'uppercase',
};

const dividerStyles = {
    width: 175,
    mx: 'auto',
    bgcolor: 'grey.600',
    mb: 3,
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 560,
    width: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
};
