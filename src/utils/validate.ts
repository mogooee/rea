const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

export const validateAuth = {
  password: (password: string, passwordConfrim: string) => password === passwordConfrim,
  email: (email: string) => email === '' || EMAIL_REGEX.test(email),
}
