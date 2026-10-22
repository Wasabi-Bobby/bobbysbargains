/**
 * Helpers
 */
// One week in milliseconds
const WEEK_MS = 7 * 24 * 60 * 60 * 1000


export function toMillis(value) {
    if (!value) {
        return 0
    }
    if (typeof value === 'number') {
        return value
    }
    if (value instanceof Date) {
        return value.getTime()
    }
    if (typeof value.toMillis === 'function') {
        return value.toMillis()
    }

    return 0
}

/**
 * the single place to decide card state
 * @param {object} item
 * @param {object} uid
 * @param {number} nowMillis
 * @returns {{status: 'new'|'sold'|'hold'|'available'}}
 */

export function getDisplayStatus(item, uid, now = Date.now()) {
    if (item.status === 'sold') {
        return 'sold'
    }

    const holdActive =
        item.status === 'reserved' && toMillis(item.reservedUntil) > now

    if (holdActive) {
        return item.reservedBy === uid ? 'mine' : 'held'
    }

    return 'available'
}

// If less than a week old return true otherwise return false.
export function isNew(item, now = Date.now()) {
    const timeSincePost = now - toMillis(item.createdAt)
    return timeSincePost < WEEK_MS
}

export function formatPrice(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    }).format(amount)
}
