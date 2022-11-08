import { ModalState } from '../../Atoms'
import { StyledModal } from './styled'
import { useRecoilValue, useRecoilState } from 'recoil'

export default function Modal() {
  const isModalOpen = useRecoilValue(ModalState)
  const [isOpen, setIsOpen] = useRecoilState(ModalState)

  return (
    <>
      {isModalOpen ? (
        <StyledModal>
          EM CONSTRUÇÃO
          <button onClick={() => setIsOpen(false)}>SAIR</button>
          {/* <form>
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <button onClick={() => setIsOpen(false)}>Cadastrar</button>
          </form> */}
        </StyledModal>
      ) : null}
    </>
  )
}
