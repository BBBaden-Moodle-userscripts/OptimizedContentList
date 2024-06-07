// ==UserScript==
// @name         Optimized Content List
// @namespace    Violentmonkey Scripts
// @match        https://moodle.bbbaden.ch/course/view.php*
// @grant        none
// @version      0.1
// @author       PianoNic
// @downloadURL  https://github.com/BBBaden-Moodle-userscripts/OptimizedContentList/raw/main/OptimizedContentList.user.js
// @updateURL    https://github.com/BBBaden-Moodle-userscripts/OptimizedContentList/raw/main/OptimizedContentList.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Set your dynamic conditions here
    const iconsEnabled = true;
    const smallerIcons = true;
    const titlesEnabled = true;
    const smallTitles = true;
    const changeTitleColor = true;
    const remItemsEnabled = true;
    const socialHeader = true;
    const showFooter = true;

    // Dynamic CSS template
    const dynamicCSS = `
        ${iconsEnabled && smallerIcons ? `
            /* ICONS NEW SIZE */
            .activityicon {
                height: 20px !important;
                width: 20px !important;
            }
            .activityiconcontainer {
                height: 30px !important;
                width: 30px !important;
            }
            .activity-item {
                margin-top: -20px;
                margin-bottom: -10px !important;
            }

            /* [BOOST THEME] SET ACTIVITY BOX PADDING */
            .activity-item:not(.activityinline) {
                border: 0px solid #dee2e6;
                padding: 1rem;
            }
            .section .activity.indented + .indented .activity-item {
                border-top: 0px solid #dee2e6;
                border-radius: unset;
            }
        ` : ''}

        ${titlesEnabled ? `
            /* Dynamic CSS for Titles */
            h1, .h1 {
                font-size: ${smallTitles ? '28px' : 'inherit'} !important;
                color: ${changeTitleColor ? 'yourTitleColor' : 'inherit'} !important;
            }
            h2, .h2 {
                font-size: ${smallTitles ? '24px' : 'inherit'} !important;
                color: ${changeTitleColor ? 'yourTitleColor' : 'inherit'} !important;
            }
            h3, .h3 {
                font-size: ${smallTitles ? '20px' : 'inherit'} !important;
                color: ${changeTitleColor ? 'yourTitleColor' : 'inherit'} !important;
            }
            h4, .h4 {
                font-size: ${smallTitles ? '16px' : 'inherit'} !important;
                color: ${changeTitleColor ? 'yourTitleColor' : 'inherit'} !important;
            }
            h5, .h5 {
                color: ${changeTitleColor ? 'yourTitleColor' : 'inherit'} !important;
            }
        ` : ''}

        ${remItemsEnabled ? `
            /* Dynamic CSS for Removing Unnecessary Elements */
            .socials-header {
                display: ${socialHeader ? 'none' : 'inherit'} !important;
            }
            footer, .footer {
                display: ${showFooter ? 'none' : 'inherit'} !important;
            }
        ` : ''}
    `;

    // Add dynamic CSS to the page
    GM_addStyle(dynamicCSS);
})();
