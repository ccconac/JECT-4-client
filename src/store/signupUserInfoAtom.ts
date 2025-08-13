import { atom } from 'jotai';

export interface UserInfo {
    code: string;
    category: string;
    nickname: string;
}

export const userInfoAtom = atom<UserInfo>({
    code: '',
    category: '',
    nickname: '',
});
