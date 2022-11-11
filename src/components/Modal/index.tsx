import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { ModalState } from '../../Atoms'
import { StyledModal } from './styled'

export default function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(ModalState)

  const handleBackdropClick = (e: any) => {
    if (e) e.preventDefault()
    if (e.target.id !== 'backdrop') return
    setIsOpen(false)
  }

  const handleCloseModalClick = () => setIsOpen(false)

  const handleOnSubmit = () => {
    setIsOpen(false)
    console.log('enviado')
  }

  useEffect(() => {
    //checkando se o objeto window já está disponível
    if (!window) return

    //
    const keyEscapeListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', keyEscapeListener)

    return () => {
      window.removeEventListener('keydown', keyEscapeListener)
    }
  })

  return (
    <>
      {isOpen ? (
        <StyledModal
          id='backdrop'
          onClick={handleBackdropClick}>
          <form>
            <span onClick={handleCloseModalClick}>x</span>
            <input
              type='text'
              placeholder='Video Title'
            />
            <input
              type='text'
              placeholder='URL'
            />
            <input
              type='text'
              placeholder='xxx'
            />
            <button
              type='submit'
              onClick={handleOnSubmit}>
              Cadastrar
            </button>
          </form>
        </StyledModal>
      ) : null}
    </>
  )
}
