export const EDIT = 'clicker-xbee/device-name/EDIT'
export const FINISH = 'clicker-xbee/device-name/FINISH'

export default function reducer(state = {}, action) {
  switch (action.type) {
  case FINISH:
    return {}
  case EDIT:
    return {
      deviceKey: action.deviceKey,
      deviceName: action.deviceName,
    }
  default: return state
  }
}

export function edit(deviceKey, deviceName) {
  return { type: EDIT, deviceKey, deviceName }
}

export function finish(cancelled, deviceKey, deviceName) {
  return { type: FINISH, deviceKey, deviceName, cancelled }
}