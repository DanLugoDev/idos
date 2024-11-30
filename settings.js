/**
 * @template T Cast
 * @param {string} k
 * @return {T}
 */
const getSetting = k => {}

/** @typedef {(data: any) => void} Listener */

/** @type {Record<string, readonly Listener[]>} */
const settingToListeners = {}

const listenToSetting = (k, cb) => {
  if (!settingToListeners[k]) settingToListeners[k] = []
  settingToListeners[k].push(cb)
}

const unListenToSetting = (k, cb) => {
  const idx = settingToListeners[k].indexOf(cb)
  if (idx === -1) throw new ReferenceError()
  settingToListeners[k].splice(idx, 1)
}

/**
 * @param {string} k
 * @param {any} v
 */
const setSetting = (k, v) => {}

export { getSetting, setSetting }
