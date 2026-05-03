export interface IFormField {
  name: string
  type: 'text' | 'email' | 'number' | 'password'
  placeholder?: string
  label: string
  class?: string
  mask?: string
}
