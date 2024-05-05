import { token } from '../services/line'
import path from 'path'

export const redirect = async (req, res) => {
  try {
    await token(req.query.code, req.query.state)
    res.sendFile(path.join(__dirname, '../../views', 'line-connected.html'))
  } catch (error) {
    return res.json(error)
  }
}
