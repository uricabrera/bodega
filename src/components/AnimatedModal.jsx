import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import coberturaPamiGrande from "./../media/cobertura-pami-mediano.png";
import {GrClose} from "react-icons/gr";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        position: "relative"
    },
}));

export default function AnimatedModal({show,handleClose,imgUrl,nombreComercial,pami}) {
    const classes = useStyles();

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={show}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={show}>
                    <div className={classes.paper} >
                        <h2 style={{textAlign: "center"}}>{nombreComercial}</h2>
                        <img src={imgUrl} alt="" width={300} height={300} />
                        {pami === "1" && (<img src={coberturaPamiGrande} alt="Cobertura Pami Grande" className="modal_image_pami"/>)}
                        <GrClose className="modal_image_close" onClick={handleClose}/>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}