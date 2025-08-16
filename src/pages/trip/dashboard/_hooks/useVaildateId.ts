import { useEffect, useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

interface ValidatedIds {
    tripId: number | null;
    stampId: number | null;
}

const useVaildateId = (): ValidatedIds | null => {
    const navigate = useNavigate();

    const { tripId: tripIdParam } = useParams<{ tripId: string }>();
    const [searchParams] = useSearchParams();
    const stampIdParam = searchParams.get('stampId');

    const validateId = (id: number) =>
        Number.isFinite(id) && id > 0 ? id : null;

    const id = useMemo(() => {
        const tripIdNumber = Number(tripIdParam);
        const stampIdNumber = Number(stampIdParam);
        return {
            tripId: validateId(tripIdNumber),
            stampId: validateId(stampIdNumber),
        };
    }, [tripIdParam, stampIdParam]);

    useEffect(() => {
        if (id.tripId === null || id.stampId === null) {
            alert('잘못된 여행 id입니다.');
            navigate(-1);
        }
    }, [id, navigate]);

    if (id.tripId === null || id.stampId === null) {
        return null;
    }

    return id;
};

export default useVaildateId;
