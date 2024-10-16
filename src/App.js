import React, { useState } from 'react';
import LoginPage from './components/LoginPage'; // LoginPage 컴포넌트 임포트
import HomePage from './components/homepage'; // HomePage 컴포넌트 임포트

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

    const handleLogin = () => {
        setIsLoggedIn(true); // 로그인 시 상태 변경
    };

    return (
        <div>
            {isLoggedIn ? <HomePage /> : <LoginPage onLogin={handleLogin} />}
        </div>
    );
};

export default App;
