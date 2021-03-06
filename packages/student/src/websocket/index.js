import { bindWebsocket, publish as parentPublish, BATTERY_REQUEST, STUDENT } from '@clickr/common/lib/websocket';
import { get as getSetting, getState as settings } from '../settings';

export function bind(dispatch, uri) {
  bindWebsocket(dispatch, uri, [BATTERY_REQUEST], STUDENT);
}

export function publish(type, payload, state, number) {
  const deviceId = `${getSetting(settings(state), 'deviceId')}.${number}`;
  const deviceType = 'tablet';
  parentPublish(type, {
    ...payload,
    deviceType,
    deviceId,
  });
}
