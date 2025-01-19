import { type RegisterOptions } from 'react-hook-form'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

type Rules = { [key in keyof FormData]?: RegisterOptions<FormData, key> }

export const rules: Rules = {
  email: {
    required: { value: true, message: 'Email là bắt buộc' },
    pattern: { value: /^\S+@\S+$/i, message: 'Email không hợp lệ' },
    maxLength: { value: 100, message: 'Email không được quá 100 ký tự' },
    minLength: { value: 8, message: 'Email không được ít hơn 8 ký tự' }
  },
  password: {
    required: { value: true, message: 'Mật khẩu là bắt buộc' },
    maxLength: { value: 100, message: 'Mật khẩu không được quá 100 ký tự' },
    minLength: { value: 8, message: 'Mật khẩu không được ít hơn 8 ký tự' }
  },
  confirm_password: {
    required: { value: true, message: 'Nhập lại mật khẩu là bắt buộc' },
    maxLength: { value: 100, message: 'Mật khẩu không được quá 100 ký tự' },
    minLength: { value: 8, message: 'Mật khẩu không được ít hơn 8 ký tự' }
  }
}
