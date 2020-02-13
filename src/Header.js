import React from 'react';

function Header() {
    return (
        <header>
            <div class="content content-flex">
                <h1>Metronome</h1>
                <nav>
                    <ul>
                        <li><a href="/" class="current-page">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
