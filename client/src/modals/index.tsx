import React from 'react';
import { ModalsEnum, ModalStore } from "../stores/ModalStore";
import { observer } from "mobx-react";
import { useInjection } from "inversify-react";
import TestModal from "./TestModal";

const MODAL_REGISTRY = {
    [ModalsEnum.Test]: TestModal,
}

export const ModalsContainer = observer(() => {
    const modalStore = useInjection(ModalStore);

    return (
        <>
            {/*{modalStore.activeModals.length > 0 && <ScrollLock />}*/}
            {modalStore.activeModals.map((m, i) => {
                const Component = MODAL_REGISTRY[m.key];
                return <Component key={i} data={m.data} idx={i} />;
            })}
        </>
    )
});
