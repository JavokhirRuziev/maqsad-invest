import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Close from '@mui/icons-material/Close';

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

export default function BasicModal({
    children,
    open,
    handleClose,
}: {
    children: React.ReactNode;
    open: boolean;
    handleClose: () => void;
}) {
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
                            <Typography variant='h3' textAlign={'center'}>
                                VIP TARIFIGA RO'YXATDAN O'TISH
                            </Typography>
                            <Typography variant='body1' textAlign={'center'}>
                                Ma'lumotlaringizni qoldiring, siz bilan tez
                                orada bog'lanamiz
                            </Typography>
                            <TextField placeholder='Ismingiz' />
                            <TextField placeholder='+9989' />
                            <Button sx={buttonStyles}>Ro'yxatdan o'tish</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}

const iconWrapperStyles = {
    position: 'absolute',
    top: 30,
    right: 30,
    cursor: 'pointer',
};

const bottomWrapperStyles = {
    p: '40px 45px',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
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
