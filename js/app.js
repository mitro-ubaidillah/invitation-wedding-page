import { audio } from './audio.js';
import { comment } from './comment.js';
import { guest } from './guest.js';
import { like } from './like.js';
import { offline } from './offline.js';
import { pagination } from './pagination.js';
import { progress } from './progress.js';
import { theme } from './theme.js';
import { util } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
    theme.init();
    audio.init();
    guest.init();
    offline.init();
    progress.init();
    pagination.init();
    window.AOS.init();

    window.like = like;
    window.util = util;
    window.guest = guest;
    window.theme = theme;
    window.audio = audio;
    window.comment = comment;
    window.pagination = pagination;
});
