import { StyledSwitch } from './styled'

export default function SwitchButton() {
  return (
    <StyledSwitch>
      <input
        id='darkmode'
        type='checkbox'
      />
      <label
        htmlFor='darkmode'
        className='darkmode-switch'>
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </StyledSwitch>
  )
}
