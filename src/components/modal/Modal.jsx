import React, { useContext } from 'react'
import Win from './Win'
import Restart from './Restart'
import { ModalContext } from '../../context/ModalContext'
import { GameContext } from '../../context/GameContext'



const Modal = () => {
    const {show,mode} = useContext(ModalContext) ;
    console.log(mode)
    const {winner} = useContext(GameContext)
  return (
        <>
              {
        (show && (winner !== null))&& (
            <div className="modal">
            <div className="modal__content">
                <div className="container">
                   {mode === 'winner'  && <Win/>}
                   {mode === 'start' && <Restart/>}
                </div>
            </div>
        </div>
        )
       }
        </>
    )
}

export default Modal