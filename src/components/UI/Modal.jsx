import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => <div onClick={props.onClick} className={classes.backdrop}></div>

const ModalOverlay = props => {
    return <div onClick={props.onClick} className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portal = document.getElementById('overlays');

const Modal = props => {
    return (<Fragment>
        {createPortal(<Backdrop onClick={props.onClick} />, portal)}
        {createPortal(<ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>, portal)}
    </Fragment>
    )
}

export default Modal;