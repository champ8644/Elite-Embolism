import { redirect } from '../controllers/line_controller'

export default function (app) {
  app.get('/line/redirect', redirect)
}
