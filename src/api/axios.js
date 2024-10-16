import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // 백엔드 서버의 포트에 맞게 수정
    timeout: 5000, // 요청 제한 시간 설정 (선택 사항)
    headers: {
        'Content-Type': 'application/json',
    }
});

export default instance; // axios 인스턴스 내보내기
