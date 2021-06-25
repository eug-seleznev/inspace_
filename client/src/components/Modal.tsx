import React, { useEffect, useRef } from 'react';
import classNames from "classnames";
import { observer } from "mobx-react";
import { ModalsEnum, ModalStore } from "../stores/ModalStore";
import { useInjection } from "inversify-react";
import './Modal.styl';

interface IModalProps {
    modalKey: ModalsEnum;
    onShow?: () => any;
    onHide?: () => any;
    closable?: boolean;
    idx: number;
}

type P = React.PropsWithChildren<IModalProps>;

const Modal: React.FC<P> = observer(({ modalKey, children, onShow, onHide, idx, closable = true }: P) => {
    const fade = useRef();

    const modalStore = useInjection(ModalStore);

    useEffect(() => {
        onShow?.();
        return () => onHide?.();
    }, []);

    return (
        <div ref={fade} className={classNames('fade')} onClick={e => e.target === fade.current && closable && modalStore.hideModal(idx)}>
            <div className={classNames('modal')}>
                {children}
            </div>
        </div>
    )
});

export default Modal;
