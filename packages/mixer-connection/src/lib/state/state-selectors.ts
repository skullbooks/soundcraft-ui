import { distinctUntilChanged, filter, map, OperatorFunction, pipe } from 'rxjs';

import { ChannelType, BusType, ParametricEqKey } from '../types';
import { getValueFromObject, joinStatePath } from '../utils/state-utils';

type Projector<T> = (state: unknown) => T;
type Selector<T> = (...args: unknown[]) => Projector<T>;

/**
 * RxJS operator to apply a custom projection to the full mixer state.
 * @param projector Projector function generated by a selector
 */
export const select = <T>(projector: Projector<T>): OperatorFunction<unknown, T> =>
  pipe(
    map(state => projector(state)),
    distinctUntilChanged(),
    filter(e => e !== undefined)
  );

/**
 * RxJS operator to select a raw value from the mixer state.
 * @param path State key to select
 */
export const selectRawValue = <T>(path: string, defaultValue?: T) =>
  select(state => getValueFromObject<T>(state, path, defaultValue));

/**************************** */

/**
 * Internal helper function to select a property from a channel.
 * Differentiates between master and aux/fx bus
 * @param property The property to select
 * @param channelType
 * @param channel
 * @param busType
 * @param bus
 */
const selectGenericChannelProperty: Selector<number> = (
  property: string,
  defaultValue: number = undefined,
  channelType: ChannelType,
  channel: number,
  busType: BusType,
  bus?: number
) => {
  switch (busType) {
    case 'master': {
      const path = joinStatePath(channelType, channel - 1, property);
      return state => getValueFromObject(state, path, defaultValue);
    }
    case 'aux':
    case 'fx':
      return state => {
        const path = joinStatePath(channelType, channel - 1, busType, bus - 1, property);
        return getValueFromObject(state, path, defaultValue);
      };
  }
};

/**
 * Select level value of the master fader
 */
export const selectMasterValue: Selector<number> = () => state =>
  getValueFromObject<number>(state, 'm.mix');

/**
 * Select pan value of the master fader
 */
export const selectMasterPan: Selector<number> = () => state =>
  getValueFromObject<number>(state, 'm.pan');

/**
 * Select dim value of the master fader
 */
export const selectMasterDim: Selector<number> = () => state =>
  getValueFromObject<number>(state, 'm.dim');

/**
 * Select delay value of the master output (L or R)
 */
export const selectMasterDelay: Selector<number> = (side: 'L' | 'R') => state =>
  getValueFromObject(state, `m.delay${side}`, 0) * 1000;

/**
 * Select name of a channel
 * @param channelType Type of the channel
 * @param channel Channel number
 * @param busType Type of the bus
 * @param bus bus number
 */
export const selectChannelName: Selector<number> = (
  channelType: ChannelType,
  channel: number,
  busType: BusType,
  bus?: number
) => selectGenericChannelProperty('name', 0, channelType, channel, busType, bus);

/**
 * Select pan value of a channel
 * @param channelType Type of the channel
 * @param channel Channel number
 * @param busType Type of the bus
 * @param bus bus number
 */
export const selectPan: Selector<number> = (
  channelType: ChannelType,
  channel: number,
  busType: BusType,
  bus?: number
) => selectGenericChannelProperty('pan', 0, channelType, channel, busType, bus);

/**
 * Select mute value of a channel
 * @param channelType
 * @param channel
 * @param busType
 * @param bus
 */
export const selectMute: Selector<number> = (
  channelType: ChannelType,
  channel: number,
  busType: BusType,
  bus?: number
) => selectGenericChannelProperty('mute', 0, channelType, channel, busType, bus);

/**
 * Select solo value of a channel
 * @param channelType
 * @param channel
 */
export const selectSolo: Selector<number> = (channelType: ChannelType, channel: number) => {
  const path = joinStatePath(channelType, channel - 1, 'solo');
  return state => getValueFromObject<number>(state, path);
};

/**
 * Select fader value of a channel
 * @param channelType
 * @param channel
 * @param busType
 * @param bus
 */
export const selectFaderValue: Selector<number> = (
  channelType: ChannelType,
  channel: number,
  busType: BusType,
  bus?: number
) => {
  {
    switch (busType) {
      case 'master': {
        const path = joinStatePath(channelType, channel - 1, 'mix');
        return state => getValueFromObject<number>(state, path);
      }
      case 'aux':
      case 'fx': {
        const path = joinStatePath(channelType, channel - 1, busType, bus - 1, 'value');
        return state => getValueFromObject<number>(state, path);
      }
    }
  }
};

/**
 * Select eq values of a channel
 * @param channelType
 * @param channel
 * @param band
 * @param key
 */
export const selectParametricEqValue: Selector<number> = (
  channelType: ChannelType,
  channel: number,
  band: number,
  key: ParametricEqKey,
) => {
  {
    switch (channelType) {
      case 'i':
      case 'f':
      case 'i':
      case 'l':
      case 'p':
      case 's': {
        const path = joinStatePath(channelType, channel - 1, 'eq', `b${band}`, key);
        return state => getValueFromObject<number>(state, path);
      }
    }
  }
};


/**
 * Select delay value of a master channel in ms
 * @param channelType
 * @param channel
 */
export const selectDelayValue: Selector<number> = (channelType: ChannelType, channel: number) => {
  const path = joinStatePath(channelType, channel - 1, 'delay');
  return state => getValueFromObject(state, path, 0) * 1000;
};

/**
 * Select "post" value of a send channel
 * @param channelType
 * @param channel
 */
export const selectPost: Selector<number> = (
  channelType: ChannelType,
  channel: number,
  busType: BusType,
  bus: number
) => {
  const path = joinStatePath(channelType, channel - 1, busType, bus - 1, 'post');
  return state => getValueFromObject(state, path, 0);
};

/**
 * Select "postproc" value of a send channel
 * @param channelType
 * @param channel
 */
export const selectAuxPostProc: Selector<number> = (
  channelType: ChannelType,
  channel: number,
  aux: number
) => {
  const path = joinStatePath(channelType, channel - 1, 'aux', aux - 1, 'postproc');
  return state => getValueFromObject(state, path, 0);
};

/**
 * Select stereo index of a channel.
 * This will be -1 when no stereo link is active, 0 when the channel is left in the link, 1 if it's right
 * @param channelType
 * @param channel
 */
export const selectStereoIndex: Selector<number> = (channelType: ChannelType, channel: number) => {
  const path = joinStatePath(channelType, channel - 1, 'stereoIndex');
  return state => {
    // only input, line, player and aux can be linked
    if (['i', 'l', 'p', 'a'].includes(channelType)) {
      return getValueFromObject(state, path, -1);
    }
    return -1;
  };
};

/**
 * Select phantom power state of a hardware channel
 * @param channel
 * @param key Type of the channel: `hw` or `i`, according to the mixer model
 */
export const selectPhantom: Selector<number> = (channel: number, key: 'hw' | 'i') => {
  const path = joinStatePath(key, channel - 1, 'phantom');
  return state => getValueFromObject<number>(state, path);
};

/**
 * Select linear gain level of a channel
 * @param channel
 * @param key Type of the channel: `hw` or `i`, according to the mixer model
 */
export const selectGain: Selector<number> = (channel: number, key: 'hw' | 'i') => {
  const path = joinStatePath(key, channel - 1, 'gain');
  return state => getValueFromObject<number>(state, path);
};

/**
 * Select fader value of a volume bus (headphones or solo)
 * @param busName Name of the bus in the "settings" part of the state
 * @param busId Optional ID of the bus
 */
export const selectVolumeBusValue: Selector<number> = (busName: string, busId?: number) => {
  const path = joinStatePath('settings', busName, ...(busId >= 0 ? [busId] : []));
  return state => getValueFromObject<number>(state, path);
};

/**************
 * PLAYER
 *************/

/** Select player current length */
export const selectPlayerLength: Selector<number> = () => {
  return state => getValueFromObject(state, 'var.currentLength', -1);
};

/** Select player current position */
export const selectPlayerCurrentTrackPos: Selector<number> = () => {
  return state => getValueFromObject(state, 'var.currentTrackPos', 0);
};

const calculateElapsedTime = (pos: number, length: number): number =>
  Math.max(0, Math.floor(pos * length));

const calculateRemainingTime = (pos: number, length: number): number =>
  Math.max(0, Math.floor(length - calculateElapsedTime(pos, length)));

/** Select player elapsed time */
export const selectPlayerElapsedTime: Selector<number> = () => {
  return state => {
    const pos = selectPlayerCurrentTrackPos()(state);
    const length = selectPlayerLength()(state);
    return calculateElapsedTime(pos, length);
  };
};

/** Select player remaining time */
export const selectPlayerRemainingTime: Selector<number> = () => {
  return state => {
    const pos = selectPlayerCurrentTrackPos()(state);
    const length = selectPlayerLength()(state);
    return calculateRemainingTime(pos, length);
  };
};

/**************
 * MULTITRACK
 *************/

/** Select player current length */
export const selectMtkLength: Selector<number> = () => {
  return state => getValueFromObject(state, 'var.mtk.currentLength', -1);
};

/** Select player current position */
export const selectMtkCurrentTrackPos: Selector<number> = () => {
  return state => getValueFromObject(state, 'var.mtk.currentTrackPos', 0);
};

/** Select player elapsed time */
export const selectMtkElapsedTime: Selector<number> = () => {
  return state => {
    const pos = selectMtkCurrentTrackPos()(state);
    const length = selectMtkLength()(state);
    return calculateElapsedTime(pos, length);
  };
};

/** Select player remaining time */
export const selectMtkRemainingTime: Selector<number> = () => {
  return state => {
    const pos = selectMtkCurrentTrackPos()(state);
    const length = selectMtkLength()(state);
    return calculateRemainingTime(pos, length);
  };
};
