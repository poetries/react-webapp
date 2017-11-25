import 'whatwg-fetch'
import 'es6-promise'

export const get = (url) => fetch(url, {
      credentials: 'include',
      headers: {
          'Accept': 'application/json, text/plain, */*'
      }
})
