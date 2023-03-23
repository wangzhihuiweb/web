import request from '@/utils/request'
export const getweather= () => {
  return request({
    url: '/api/getweather',
    method: 'get',
  })
}
