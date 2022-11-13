import { atom } from 'recoil'

export const ModalState = atom<boolean>({
  key: 'modalToggleState',
  default: false,
})

export const SearchBarInputState = atom<string>({
  key: 'searchBarInputState',
  default: '',
})

export const ThemeToggleState = atom<string>({
  key: 'themeToggleState',
  default: '',
})

interface ModalFormProps {
  title: string
  url: string
}
export const ModalFormState = atom<ModalFormProps>({
  key: 'modalFormState',
  default: {
    title: '',
    url: '',
  },
})

export const ThumbnailKeyState = atom<string>({
  key: 'thumbnailState',
  default: '',
})
