/**
 * API定数
 */

// 接頭語
const PREFIX = '/api'
// 認証なし
export const NO_TOKEN = '/public'

// ログイン
export const LOGIN = `${PREFIX}${NO_TOKEN}/login`

// 出勤
export const AT_WORK = `${PREFIX}/office_hours/regist/at_work`
// 退勤
export const LEAVE_WORK = `${PREFIX}/office_hours/regist/leave_work`
// 出勤確認
export const CHECK_ATTENDANCE = `${PREFIX}/office_hours/check/attendance`

// 月次データ表示
export const GET_MONTHLY_DATA = `${PREFIX}/monthly_data/get`
// エクセル出力
export const GET_MONTHLY_DATA_EXCEL = `${PREFIX}/monthly_data/excel`
