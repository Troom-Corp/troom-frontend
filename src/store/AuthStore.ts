import { makeAutoObservable } from 'mobx'

import { IUser, IAuth } from '@/types'
import { AuthService } from '@/services'


class AuthStore {

  // !=== SIGNUP & SIGNIN DATA ===!
  data: IAuth = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    repeatPassword: ''
  }

  // !=== SIGNUP STEP AND THE ABILITY TO PRESS A SUBMIT-INPUT ===!
  step: boolean = false
  submit: boolean = false

  //!=== AUTH STATE ===!
  user = {} as IUser
  isAuth = false
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: IUser) {
    this.user = user
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  setData(dataValue: Partial<IAuth>) {
    this.data = {
      ...this.data,
      ...dataValue
    }
  }

  setStep(value: boolean) {
    this.step = value
  }

  setSubmit(value: boolean) {
    this.submit = value
  }

  async getProfile() {
    this.setLoading(true)
    try {
      const response = await AuthService.getProfile()
      this.setAuth(true)
      this.setUser(response.data)
    } catch (e) {
      console.log(e)
    } finally {
      this.setLoading(false)
    }
  }

  async signIn(login: string, password: string) {
    try {
      await AuthService.signIn(login, password)
      this.getProfile()
    } catch (e) {
      console.log('Signin error', e)
    }
  }

  async signUp() {
    try {
      await AuthService.signUp(this.data.firstName, this.data.lastName, this.data.login, this.data.email, this.data.password)
      this.getProfile()
    } catch (e) {
      console.log('Signup error', e)
    } finally {
    }
  }

  async signOut() {
    this.setLoading(true)
    try {
      await AuthService.signOut()
      this.setAuth(false)
      this.setUser({} as IUser)
    } catch (e) {
      console.log('Signout error', e)
    } finally {
      this.setLoading(false)
    }
  }
}

export default new AuthStore()