import React from 'react'
import './TopPage.css'

export const TopPage = () => {
    return (
        <div class="page-root">
            <header class="header">
                <div class="container header-row">
                    <p class="logo">スケジュール管理</p>
                    <nav>
                        <ul class="nav-list">
                            <li>利用説明</li>
                            <li>ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
