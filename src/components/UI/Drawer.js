import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import classes from './Drawer.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const portalElement = document.getElementById('overlays');

const Drawer = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <div
                    id="drawer"
                    className={`${classes.drawer} ${
                        props.isToggleOpen ? 'slide-in' : 'slide-out'
                    }`}
                >
                    {props.children}
                </div>,
                portalElement
            )}
        </Fragment>
    );
};

export default Drawer;
