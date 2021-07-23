/*
 * @Author: your name
 * @Date: 2021-07-22 15:57:31
 * @LastEditTime: 2021-07-22 16:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test01\src\request\request.js
 */
import axios from 'axios'
export const request = path => {
  return new Promise((resolve, reject) => {
    axios({ url: path })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
