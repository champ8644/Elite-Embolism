import axios from 'axios'
import qs from 'qs'

const url_line_token = 'https://notify-bot.line.me/oauth/token'

//Get Token
export const token = async (code, username) => {
  axios
    .post(
      url_line_token,
      qs.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:4000/line/redirect',
        client_id: 'client id',
        client_secret: 'client secret',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then((response) => {
      console.log('Get Token : ', response.data.access_token)

      //Logic process save or update access token

      return response.data
    })
    .catch(function (error) {
      console.error('Error : ', error.response.data.message)
      return error
    })
}
