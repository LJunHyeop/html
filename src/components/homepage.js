import React, { useEffect } from 'react';
import './homepage.css'; // 스타일 시트 임포트

const HomePage = () => {
    const handleLogout = () => {
        localStorage.removeItem('token'); // 로컬 스토리지에서 토큰 제거
        window.location.reload(); // 페이지 새로고침
    };

    useEffect(() => {
        // 페이지가 로드될 때 토큰이 없으면 로그인 페이지로 리디렉션
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/login'; // 로그인 페이지 URL로 변경
        }
    }, []);

    return (
        <div className="container">
            <header>
                <div className="picture"></div> {/* 이미지 표시를 위한 div 추가 */}
                <h1>당근마켓</h1>
                <button id="logoutButton" onClick={handleLogout}>로그아웃</button>
            </header>
            <main>
                <h2>환영합니다!</h2>
                <p>당신의 최근 거래 내역:</p>
                <div id="recent-transactions">
                    {/* 거래 내역은 여기에 동적으로 추가됩니다. */}
                </div>
                <button id="addTransactionButton">거래 추가하기</button>
            </main>
        </div>
    );
};

export default HomePage;
