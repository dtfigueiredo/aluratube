import { ModalState } from '../../Atoms'
import { StyledAddButton } from './styled'
import { useRecoilState } from 'recoil'

export default function AddButton() {
  const [isOpen, setIsOpen] = useRecoilState(ModalState)
  // return <StyledAddButton onClick={() => setIsOpen(true)}>+</StyledAddButton>
  return <StyledAddButton onClick={() => alert('em construção')}>+</StyledAddButton>
}
