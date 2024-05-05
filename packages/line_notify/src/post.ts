import axios from 'axios'
import QueryString from 'qs'

const STROKE_test = 'TOhP6LbkcaFxf9OPc6b8lN2OsZXomtBKL0VR74Bl2W1'
const STROKE_MIMIC_test = 'yMzgID8t3P3VNk44b6FA8JgEwv9jfCTgQOO9ujSAmFC'
const STROKE = 'vtY5qRiWSkL2GTRcEbxn0Q3J549fpMvNiBO9KXzZVo7'
const STROKE_MIMIC = 'nqxbJQ7ATMUupHztA1OWTFOVs6kEvDLK4Nt1w01h6UP'

export function main() {
  axios({
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      Authorization: 'Bearer ' + STROKE,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
    data: QueryString.stringify({
      message: `
=============

Wed Jun 05 2024
เวลา : 00:05
R2/F1 : วริศ
----------------
ชื่อย่อ: จรูญ แก่นนิล
อายุ : 50 ปี 
HN  : 3825456
----------------
onset : 17
CC : อ่อนแรงครึ่งซีกซ้าย
CT findings : No acute intracranial hemorrhage or acute large territorial infarction
----------------
** DIAGNOSIS **
วินิจฉัย : Ischemic stroke
TOAST classification  : Undetermined
NIHSS : 3
----------------
** MANAGEMENT **
- admit ER Holding
- IV hydration
- Pre-admission Lab
- CHANCE protocol
`,
    }),
  })
    .then(function (res) {
      console.log(res.data)
    })
    .catch(function (err) {
      console.error(err)
    })
}

main()
