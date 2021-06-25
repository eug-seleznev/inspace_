import React from 'react';
import Modal from "../components/Modal";
import {ModalsEnum, ModalStore} from "../stores/ModalStore";
import { observer } from "mobx-react";
import { resolve } from "inversify-react";

interface IConnectModalProps {
    data: { text: string };
    idx: number;
}

interface IConnectModalState {
}

@observer
class TestModal extends React.Component<IConnectModalProps, IConnectModalState> {
    @resolve(ModalStore)
    declare protected readonly modalStore: ModalStore;

    render() {
        return (
            <Modal modalKey={ModalsEnum.Test} idx={this.props.idx}>
                <button onClick={() => this.modalStore.hideModal(this.props.idx)}>asd</button><br/>
                Text: {this.props.data.text}
            </Modal>
        )
    }
}

export default TestModal;
