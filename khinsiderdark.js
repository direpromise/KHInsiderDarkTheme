// ==UserScript==
// @name         Khinsider Dark Theme
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Applies a dark theme to Khinsider.
// @author       holoren
// @match        https://downloads.khinsider.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        * {
            background-color: #121212 !important;
            color: #e0e0e0 !important;
            border-color: #333 !important;
        }
        body, html {
            background-color: #121212 !important;
        }
        a { color: #bb86fc !important; }
        a:visited { color: #3700b3 !important; }
        .songlist_header, .songlist tr:nth-child(even) {
            background-color: #1e1e1e !important;
        }
        .songlist tr:nth-child(odd) {
            background-color: #2a2a2a !important;
        }
        .songlist td {
            border-color: #333 !important;
        }
        #page, #container, #content, .menu, .menu a, .menu table, .menu td, .menu tr, .menu th, .menu div, .menu ul, .menu li {
            background-color: #1e1e1e !important;
            color: #e0e0e0 !important;
        }
        img, video {
            filter: brightness(0.8) contrast(1.2);
        }
        input, textarea, select, button {
            background-color: #1e1e1e !important;
            color: #e0e0e0 !important;
            border: 1px solid #444 !important;
        }
        .menu, .menu a, .menu table, .menu td, .menu tr, .menu th, .menu div, .menu ul, .menu li {
            background-color: #1e1e1e !important;
        }
        body {
            background-image: none !important;
        }
    `);
})();
