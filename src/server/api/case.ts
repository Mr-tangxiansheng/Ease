import { request } from '../index'

export async function getCaseList(param) {
  return await request.post('/getShopId',param)
}