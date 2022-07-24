import { storageService } from "./storage.service"
import { utilService } from "./util.service"

export const revengeService = {
    getEmptyRevenge,
    query,
    save
}

const STORAGE_KEY = 'revenges'

const gDefaultRevenges = [
    { _id: 'r2', description: 'Turn off the hot water ', to: 'galit', createdAt: 1658458939805, isDone: false },
    { _id: 'r3', description: 'Hide all of the toilet paper', to: 'Nofar', createdAt: 1658559985180, isDone: false },
    { _id: 'r1', description: 'Replace the salt pot with sugar', to: 'My boss', createdAt: 1658560059605, isDone: false },
    { _id: 'r4', description: 'Change phone setting to Chinese', to: 'harel', createdAt: 1658560547273, isDone: false }
]

var gRevenges = _loadRevenges()

function query() {
    return gRevenges
}

function save(revengeToSave) {
    if (revengeToSave._id) {
        const idx = gRevenges.findIndex(revenge => revenge._id === revengeToSave._id)
        gRevenges.splice(idx, 1, revengeToSave)
    } else {
        revengeToSave._id = utilService.makeId()
        revengeToSave.createdAt = Date.now()
        revengeToSave.isDone = false
        gRevenges.push(revengeToSave)
    }
    storageService.store(STORAGE_KEY, gRevenges)
    return revengeToSave;
}

function getEmptyRevenge() {
    return {
        description: '',
        to: ''
    }
}

function _loadRevenges() {
    let revenges = storageService.load(STORAGE_KEY)
    if (!revenges || !revenges.length) revenges = gDefaultRevenges
    storageService.store(STORAGE_KEY, revenges)
    return revenges
}