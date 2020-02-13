import React from 'react';

function Header() {
    return (
        <header>
            <div className="content content-flex">
                <h1>Metronome</h1>
                <nav>
                    <ul>
                        <li><a href="/" className="current-page">Home</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
