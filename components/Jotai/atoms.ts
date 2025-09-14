import { atom } from 'jotai';

export const isMainPage = atom(true)
export const isInitialCarFramesLoaded = atom(false);
export const carAnimationGoingClose = atom(false);
export const isCarAnimationLoaded = atom(false);
export const isLinkUsPopupOpen = atom(false)