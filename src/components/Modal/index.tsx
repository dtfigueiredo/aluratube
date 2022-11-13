import { createClient } from '@supabase/supabase-js'
import { Formik } from 'formik'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import * as yup from 'yup'

import { ModalState, ThumbnailKeyState } from '../../Atoms'
import AddButton from '../AddButton'
import InputBlock from '../InputBLock'
import { StyledModal } from './styled'

//supabaseClient
const supabaseUrl = 'https://eoiojeiyljrsrnqjjfcu.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_PROJECT_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(ModalState)
  const [thumbnailKey, setThumbnailKey] = useRecoilState(ThumbnailKeyState)

  const defaultThumbnail =
    'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'

  //validationSchema
  const validationSchema = yup.object().shape({
    title: yup.string().required('Informe o título do video'),
    url: yup.string().url('Insira uma url válida para o video').required('Informe o link do video'),
    playlist: yup.string().required('Escolha uma playlist'),
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
            onSubmit={(values, { resetForm }) => {
              //inserindo no supabase
              supabase
                .from(`${values.playlist}_playlist`)
                .insert({
                  title: values.title,
                  url: values.url,
                  thumbnail: values.thumbnail,
                  playlist: values.playlist,
                })
                .then((result) => console.log(result))
              setThumbnailKey('')
              resetForm()
            }}
            initialValues={{
              title: '',
              url: '',
              thumbnail: '',
              playlist: '',
            }}>
            {(props) => (
              <form>
                <span onClick={handleCloseModalClick}>x</span>

                <div className='select-box'>
                  <label htmlFor='playlist'>Playlist: </label>
                  <select
                    name='playlist'
                    value={props.values.playlist}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}>
                    <option
                      value=''
                      label='Escolha a playslit'>
                      Escolha a playslit
                    </option>
                    <option
                      value='Jogos'
                      label='Jogos'>
                      Jogos
                    </option>
                    <option
                      value='Música'
                      label='Música'>
                      Música
                    </option>
                    <option
                      value='Estudo'
                      label='Estudo'>
                      Estudo
                    </option>
                  </select>
                </div>
                {props.touched.playlist && props.errors.playlist ? (
                  <p className='error-feedback'>{props.errors.playlist}</p>
                ) : null}

                <InputBlock
                  name='title'
                  value={props.values.title}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  invalid={props.errors.title}
                  type='text'
                  placeholder='Video Title'
                />
                {props.touched.title && props.errors.title ? (
                  <p className='error-feedback'>{props.errors.title}</p>
                ) : null}

                <InputBlock
                  name='url'
                  value={props.values.url}
                  onChange={(e) => {
                    props.handleChange(e)
                    const name = e.target.name
                    //separando a key da url do Youtube para gerar a thumbnail dinâmica
                    if (name === 'url') {
                      const [url, key] = e.target.value.split('?v=')
                      url.includes('youtube.com/watch')
                        ? setThumbnailKey(key)
                        : setThumbnailKey('NotYoutube')
                    }
                  }}
                  onBlur={(e) => {
                    props.handleBlur(e)
                    thumbnailKey.length === 11
                      ? (props.values.thumbnail = `https://img.youtube.com/vi/${thumbnailKey}/hqdefault.jpg`)
                      : (props.values.thumbnail = defaultThumbnail)
                  }}
                  invalid={props.errors.url}
                  type='text'
                  placeholder='URL'
                />
                {props.touched.url && props.errors.url ? (
                  <p className='error-feedback'>{props.errors.url}</p>
                ) : null}

                {thumbnailKey && thumbnailKey !== 'NotYoutube' ? (
                  <div className='thumbnail'>
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
