import request from '@/utils/request'
export const setvisits = (data: object) => {
  return request({
    url: '/api/setvisits',
    method: 'post',
    data,
  })
}
export const getvisits = () => {
  return request({
    url: '/api/getvisits',
    method: 'get',
  })
}
