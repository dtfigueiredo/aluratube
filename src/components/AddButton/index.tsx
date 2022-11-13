import { useRecoilState } from 'recoil'

import { ModalState } from '../../Atoms'
import { StyledAddButton } from './styled'

export default function AddButton() {
  const [isOpen, setIsOpen] = useRecoilState(ModalState)
  return <StyledAddButton onClick={() => setIsOpen(true)}>+</StyledAddButton>
}
