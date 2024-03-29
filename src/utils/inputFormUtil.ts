import { type ISignupForm } from '@/apis/authApis'

const INVALID_EMAIL = '이메일 형식이 올바르지 않습니다.'
const INVALID_PASSWORD = '입력한 비밀번호와 재입력한 비밀번호가 일치하지 않습니다.'

interface Form {
  name: keyof ISignupForm
  type: string
  text: string
  placeholder: string
  supportingText?: string
  isSensitive?: boolean
}

export interface SignFormList {
  title: string
  forms: Form[]
}

type GetForm = Form

type GetForms = SignFormList[]

const emailForm: GetForm = {
  name: 'email',
  type: 'email',
  text: '이메일',
  placeholder: '이메일',
  supportingText: INVALID_EMAIL,
  isSensitive: false,
}

const passwordForm: GetForm = {
  name: 'password',
  type: 'password',
  text: '비밀번호',
  placeholder: '비밀번호',
  isSensitive: true,
}

const passwordConfirmForm: GetForm = {
  name: 'passwordConfirm',
  type: 'password',
  text: '비밀번호 확인',
  placeholder: '비밀번호 확인',
  supportingText: INVALID_PASSWORD,
  isSensitive: true,
}

const usernameForm: GetForm = {
  name: 'username',
  type: 'text',
  text: '이름',
  placeholder: '이름',
  isSensitive: true,
}

export const SIGNUP_FORM: GetForms = [
  {
    title: '이메일',
    forms: [emailForm],
  },
  {
    title: '비밀번호',
    forms: [passwordForm, passwordConfirmForm],
  },
  {
    title: '개인정보',
    forms: [usernameForm],
  },
]

export const SIGNIN_FORM: GetForms = [
  {
    title: '이메일',
    forms: [emailForm],
  },
  {
    title: '비밀번호',
    forms: [passwordForm],
  },
]