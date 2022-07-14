import styled from '@emotion/styled'
import { AiFillCloseCircle } from 'react-icons/ai';


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`

export const Modal = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
`

export const CloseModalBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 30px;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;

`

export const CloseModalIcon = styled(AiFillCloseCircle)`
    width: 100%;
    height: 100%;
`