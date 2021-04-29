import { FC } from "react";
import { ImCross } from 'react-icons/im';
import { ModalPropsInterface } from "../../interfaces/props/ModalPropsInterface";

const Modal: FC<ModalPropsInterface> = ({ isOpen, setIsOpen, header, content }): JSX.Element => {
    return (
        <section
            className='modal__overlay'
            style={{ display: (isOpen? 'flex': 'none') }}>
            <section
                className='modal'>
                <ImCross
                    className='modal__close-button'
                    color='black'
                    onClick={() => { setIsOpen(false) }}/>
                <h1
                    className='modal__header'>
                    {header}
                </h1>
                <section
                    className='modal__content'>
                    {content}
                </section>
            </section>
        </section>
    );
};

export default Modal;