import { useState, useEffect } from 'react';

interface Props {
  title: string;
  count?: number;
}

export default function ExampleComponent({ title, count = 0 }: Props) {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
  }, []); // ✅ 여기에 불필요한 의존성 누락 등의 리뷰 유도 가능

  const handleClick = () => {
    setClicks(clicks + 1); // ✅ 불필요한 리렌더링 (useCallback 미사용 등) 리뷰 유도 가능
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>초기 카운트: {count}</p>
      <button onClick={handleClick}>클릭 수: {clicks}</button>
    </div>
  );
}
