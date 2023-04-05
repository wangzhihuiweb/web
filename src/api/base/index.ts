import request from '@/utils/request'

export const getpcinfo = () => {
  return request({
    url: '/api/pcinfo',
    method: 'get',
  })
}

export const setpcinfo = (data: object) => {
  return request({
    url: '/api/pcinfo',
    method: 'post',
    data,
  })
}