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
  default: 'light',
})
