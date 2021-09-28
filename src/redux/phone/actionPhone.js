import { BUY_PHONE } from './type'

export const buyPhone = (numberPhone) => {
  return { type: BUY_PHONE, payload: numberPhone }
}