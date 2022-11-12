import { Formik } from 'formik'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import * as yup from 'yup'

import { ModalState, ThumbnailKeyState } from '../../Atoms'
import AddButton from '../AddButton'
import { StyledModal } from './styled'

export default function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(ModalState)
  const [thumbnailKey, setThumbnailKey] = useRecoilState(ThumbnailKeyState)

  //validationSchema
  const validationSchema = yup.object().shape({
    title: yup.string().required('Informe o título do video'),
    url: yup.string().url('Insira uma url válida').required('Informe o link do video'),
  })

  //handles para fechar o modal
  const handleBackdropClick = (e: any) => {
    if (e) e.preventDefault()
    if (e.target.id !== 'backdrop') return
    setIsOpen(false)
    setThumbnailKey('')
  }
  const handleCloseModalClick = () => {
    setIsOpen(false)
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
          <Formik
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values)
            }}
            initialValues={{
              title: '',
              url: '',
              thumbnail: '',
            }}>
            {(props) => (
              <form>
                <span onClick={handleCloseModalClick}>x</span>

                <input
                  name='title'
                  value={props.values.title}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  type='text'
                  placeholder='Video Title'
                />
                {props.touched.title && props.errors.title ? (
                  <p className='error-feedback'>{props.errors.title}</p>
                ) : null}

                <input
                  name='url'
                  value={props.values.url}
                  onChange={(e) => {
                    props.handleChange(e)
                    const name = e.target.name
                    //separando a key da url do Youtube para gerar a thumbnail dinâmica
                    if (name === 'url') {
                      const [url, key] = e.target.value.split('?v=')
                      url.includes('youtube') ? setThumbnailKey(key) : setThumbnailKey('NotYoutube')
                      console.log(props.values.thumbnail)
                    }
                  }}
                  onBlur={(e) => {
                    props.handleBlur(e)
                    thumbnailKey.length === 11
                      ? (props.values.thumbnail = `https://img.youtube.com/vi/${thumbnailKey}/hqdefault.jpg`)
                      : ''
                  }}
                  type='text'
                  placeholder='URL'
                />
                {props.touched.url && props.errors.url ? (
                  <p className='error-feedback'>{props.errors.url}</p>
                ) : null}

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
                  onClick={() => props.handleSubmit()}
                  disabled={!props.isValid}>
                  Cadastrar
                </button>
              </form>
            )}
          </Formik>
        </StyledModal>
      ) : null}
    </>
  )
}
