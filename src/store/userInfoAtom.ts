import { atom } from 'jotai';
import { getUserName } from '../utils/userName';

export const memberNameAtom = atom<string>('');
export const memberLoadingAtom = atom<boolean>(false);
export const memberErrorAtom = atom<string | null>(null);

export const fetchMemberNameAtom = atom(null, async (_get, set) => {
    set(memberLoadingAtom, true);
    set(memberErrorAtom, null);

    try {
        const data = await getUserName();
        set(memberNameAtom, data);
    } catch (error) {
        set(memberErrorAtom, '유저 정보를 불러오지 못했습니다.');
    } finally {
        set(memberLoadingAtom, false);
    }
});
