/**
 * 表示用の時間取得
 * @param {Date} date Dateオブジェクト
 */
export const getDisplayTime = (date) => {
  const hour = zeroPadding(date.getHours(), 2)
  const minute = zeroPadding(date.getMinutes(), 2)
  const second = zeroPadding(date.getSeconds(), 2)
  return `${hour}:${minute}:${second}`
}

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const weekJpn = ['日', '月', '火', '水', '木', '金', '土']

/**
 * 表示用の日付取得
 * @param {Date} date Dateオブジェクト
 */
export const getDisplayDate = (date) => {
  const year = zeroPadding(date.getFullYear(), 4)
  const month = zeroPadding(date.getMonth() + 1, 2)
  const dateStr = zeroPadding(date.getDate(), 2)
  const day = week[date.getDay()]
  return `${year}-${month}-${dateStr} ${day}`
}

/**
 * 表示用の日付取得(年月まで)
 * @param {Date} date Dateオブジェクト
 */
export const getDisplayMonth = (date) => {
  const year = zeroPadding(date.getFullYear(), 4)
  const month = zeroPadding(date.getMonth() + 1, 2)
  return `${year}年${month}月`
}

/**
 * 表示用の曜日取得
 * @param {Date} date Dateオブジェクト
 */
export const getDisplayDay = (date) => {
  const day = week[date.getDay()]
  return `${day}`
}

/**
 * 表示用の曜日取得  日本語
 * @param {Date} date Dateオブジェクト
 */
export const getDisplayDayJpanese = (date) => {
  const day = weekJpn[date.getDay()]
  return `${day}`
}

/**
 * ゼロパディング
 * @param {number} num ターゲット数値
 * @param {number} digit 桁数
 */
const zeroPadding = (num, digit) => {
  let zero = ''
  for (let i = 0; i < digit; i++) {
    zero += '0'
  }
  return `${zero}${num}`.slice(-(digit))
}
