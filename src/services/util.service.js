export const utilService = {
    makeId,
    DateToDisplay
}

function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function DateToDisplay(dateInMilSec) {
    // const timeNow = Date.now();
    // const milSec = timeNow - createdAt;
    const date = new Date(dateInMilSec)
    const day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate()
    const month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const year = date.getFullYear()
    const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
    const hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
    const today = new Date(Date.now()).getDate()
    const dateToDisplay = (today === date.getDate()) ? `Today at ${hour}:${minutes}` : `${day}.${month}.${year} ${hour}:${minutes}`
    return dateToDisplay
}