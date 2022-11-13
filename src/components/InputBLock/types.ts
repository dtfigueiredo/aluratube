export type InputBlockProps = {
  name: string
  value: string
  onChange: (e: any) => void
  onBlur: (e: any) => void
  type: string
  placeholder: string
  invalid?: boolean | string
}
