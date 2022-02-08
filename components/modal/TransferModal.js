import React from 'react';
import styled from "styled-components"
import { useState } from 'react';
import Transfer from './Transfer';
import CoinSelector from './CoinSelector';
import { TailSpin } from "react-loader-spinner"
import Receive from './Receive';

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
    const [action, setAction] = useState('send');
    const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

    // console.log(sanityTokens);

    const selectedStyle = {
        color: "#3773f5",
    }

    const unselectedStyle = {
        border: '1px solid #282b2f',
        borderTop: 'none'
    }

    const selectedModal = (option) => {
        switch (option) {
            case 'send':
                return <Transfer
                    selectedToken={selectedToken}
                    setAction={setAction}
                    thirdWebTokens={thirdWebTokens}
                    walletAddress={walletAddress}
                />
            case 'receive':
                return (
                    <Receive 
                        selectedToken={selectedToken}
                        walletAddress={walletAddress}
                        setAction={setAction}
                    />
                )
            case 'select':
                return <CoinSelector
                    setAction={setAction}
                    selectedToken={selectedToken}
                    setSelectedToken={setSelectedToken}
                    sanityTokens={sanityTokens}
                    thirdWebTokens={thirdWebTokens}
                    walletAddress={walletAddress}
                />
            case 'transferring':
                return (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                    }}>
                        <h2>Transfer in progress...</h2>
                        <TailSpin
                            height="80"
                            width="80"
                            color="#3773f5"
                            ariaLabel="loading"
                        />
                    </div>
                )
            case 'transferred':
                return (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '2rem',
                        fontWeight: '600',
                        color: '#27ad75',
                    }}>
                       Transfer complete 
                    </div>
                )
            default:
                return <h2>Send</h2>
        }
    }

    return (
        <Wrapper>
            <Selector>
                <Option style={action == 'send' ? selectedStyle : unselectedStyle} onClick={() => setAction('send')}>
                    <p>Send</p>
                </Option>
                <Option style={action == 'receive' ? selectedStyle : unselectedStyle} onClick={() => setAction('receive')} >
                    <p>Receive</p>
                </Option>
            </Selector>
            <ModalMain>
                {selectedModal(action)}
            </ModalMain>
        </Wrapper>
    );
};

export default TransferModal;

const Wrapper = styled.div`
    height: 35rem;
    width: 27rem;
    color: white;
    border: 1px solid #282b2f;
    display: flex;
    flex-direction: column;
`

const Selector = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5rem;
`

const Option = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover {
        cursor: pointer;
        background-color: #111214;
    }
`

const ModalMain = styled.div`
    padding: 1rem;
    flex: 1;
`