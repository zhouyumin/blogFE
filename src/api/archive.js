import request from '../utils/request.js'
export const getArchive = (data) => {
  return request({
    method: 'get',
    url: '/getArchive',
    params: {
      id: data,
    },
  })
}
export const addArchive = (data) => {
  return request({
    method: 'post',
    url: '/addArchive',
    data,
  })
}
export const list = (data) => {
  return request({
    method: 'get',
    url: '/list',
    params: data,
  })
}
export const deleteArchive = (data) => {
  return request({
    method: 'delete',
    url: '/deleteArchive',
    data,
  })
}

export const getCategories = (data) => {
  return request({
    method: 'get',
    url: '/getCategories',
  })
}

export const count = (data) => {
  return request({
    method: 'get',
    url: '/count',
  })
}

export const archiveList = (data) => {
  return request({
    method: 'get',
    url: '/archiveList',
    params: data,
  })
}
