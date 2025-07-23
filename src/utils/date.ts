import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export function getTodayDate(): string {
    dayjs.locale('ko');
    return dayjs().format('YYYY년 MM월');
}
