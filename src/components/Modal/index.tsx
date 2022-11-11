import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { ModalFormState, ModalState, ThumbnailKeyState } from '../../Atoms'
import AddButton from '../AddButton'
import { StyledModal } from './styled'

export default function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(ModalState)
  const [formValues, setFormValues] = useRecoilState(ModalFormState)
  const [thumbnailKey, setThumbnailKey] = useRecoilState(ThumbnailKeyState)

  //handles para fechar o modal
  const handleBackdropClick = (e: any) => {
    if (e) e.preventDefault()
    if (e.target.id !== 'backdrop') return
    setIsOpen(false)
  }
  const handleCloseModalClick = () => setIsOpen(false)

  //handleFormChange e thumbnailKey
  const handleFormChange = (e: any) => {
    const value = e.target.value
    const name = e.target.name
    setFormValues({
      ...formValues,
      [name]: value,
    })

    if (name === 'url') {
      const [url, key] = e.target.value.split('=')
      url.includes('youtube') ? setThumbnailKey(key) : setThumbnailKey('NotYoutube')
    }
  }

  //handleSubmit
  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    console.log(formValues)
    setFormValues({
      title: '',
      url: '',
    })
    setThumbnailKey('')
  }

  //useEffect para adicionar listener e fechar o modal com o 'ESC'
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
      <AddButton />

      {isOpen ? (
        <StyledModal
          id='backdrop'
          onClick={handleBackdropClick}>
          <form>
            <span
              className='fecharmodal'
              onClick={handleCloseModalClick}>
              x
            </span>

            <input
              name='title'
              value={formValues.title}
              onChange={handleFormChange}
              type='text'
              placeholder='Video Title'
            />

            <input
              name='url'
              value={formValues.url}
              onChange={handleFormChange}
              type='text'
              placeholder='URL'
            />

            {thumbnailKey && thumbnailKey !== 'NotYoutube' ? (
              <div>
                <img
                  src={`https://img.youtube.com/vi/${thumbnailKey}/hqdefault.jpg`}
                  alt='Thumbnail do novo video'
                />
              </div>
            ) : null}

            <button
              type='submit'
              onClick={(e) => handleOnSubmit(e)}>
              Cadastrar
            </button>
          </form>
        </StyledModal>
      ) : null}
    </>
  )
}
