import React, { useState } from 'react';
import api from '../api/axios'; // axios 인스턴스 임포트
import './LoginPage.css'; // CSS 파일 임포트

const LoginPage = ({ onLogin }) => { // onLogin prop 추가
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지 상태 추가

    const handleLogin = async () => {
        setErrorMessage(''); // 로그인 시 이전 오류 메시지 초기화

        // 입력값 검증
        if (!id || !password) {
            setErrorMessage('아이디와 비밀번호를 입력해 주세요.');
            return;
        }

        // 로그인 시도 시 ID와 비밀번호 로그 출력
        console.log("로그인 시도 ID:", id); 
        console.log("로그인 시도 PW:", password);

        try {
            const response = await api.post('/api/user/sign-in', {
                userEmail: id, // id 사용
                userPw: password, // password 사용
            });
            console.log('로그인 성공:', response.data);

            // JWT 토큰을 로컬 스토리지에 저장
            localStorage.setItem('token', response.data.token); // 응답에서 토큰 키에 맞게 수정

            // 로그인 후 페이지 이동 로직 추가
            onLogin(); // 로그인 성공 시 onLogin 호출
        } catch (error) {
            console.error('로그인 실패:', error.response ? error.response.data : error.message);
            setErrorMessage('로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.'); // 오류 메시지 설정
        }
    };

    return (
        <div className="wrap">
            <div className="mytitle">
                <h1>로그인 페이지</h1>
                <h5>아이디, 비밀번호를 입력해 주세요</h5>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>
                ID: <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </p>
            <p>
                PW: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </p>
            <button onClick={handleLogin}>로그인하기</button>
        </div>
    );
};

export default LoginPage;
