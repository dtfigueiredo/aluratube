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

export const MusicPlaylistState = atom<any[]>({
  key: 'musicPlaylistState',
  default: [],
})

export const GamesPlaylistState = atom<any[]>({
  key: 'gamesPlaylistState',
  default: [],
})

export const StudyPlaylistState = atom<any[]>({
  key: 'studyPlaylistState',
  default: [],
})

export const FavoritesPlaylistState = atom<any[]>({
  key: 'favoritesPlaylistState',
  default: [],
})
