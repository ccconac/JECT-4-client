import { useNavigate } from 'react-router';
import SettingItem from './SettingItem';

const SettingList = () => {
    const navigate = useNavigate();
    const settings = [
        { label: '알림설정', onClick: () => console.log('알림 설정 클릭') },
        { label: '공지사항', onClick: () => console.log('공지사항 클릭') },
        { label: '앱 정보', onClick: () => console.log('앱 정보 클릭') },
        { label: '회원 탈퇴', onClick: () => navigate('/settings/withdrawal') },
    ];
    return (
        <div>
            {settings.map((item, index) => (
                <SettingItem label={item.label} onClick={item.onClick} />
            ))}
        </div>
    );
};

export default SettingList;
