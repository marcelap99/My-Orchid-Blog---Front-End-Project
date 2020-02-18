

/* This code goes ABOVE the main HTML Comment Box code!
 replace the text in the single quotes below to customize labels.*/
hcb_user = {
    /* L10N */
    comments_header : 'Leave A Comment Here',
    name_label : 'Enter Name Here',
    content_label: 'Enter your comment here...',
    submit : 'Submit Comment',
    logout_link : '<img title="log out" src="https://www.htmlcommentbox.com/static/images/door_out.png" alt="[logout]" class="hcb-icon hcb-door-out"/>',
    admin_link : '<img src="https://www.htmlcommentbox.com/static/images/door_in.png" alt="[login]" class="hcb-icon hcb-door-in"/>',
    no_comments_msg: 'No one has commented yet. Be the first!',
    add:'Add your comment',
    again: 'Post another comment',
    rss:'<img src="https://www.htmlcommentbox.com/static/images/feed.png" class="hcb-icon" alt="rss"/> ',
    said:'said:',
    prev_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_left.png" class="hcb-icon" title="previous page" alt="[prev]"/>',
    next_page:'<img src="https://www.htmlcommentbox.com/static/images/arrow_right.png" class="hcb-icon" title="next page" alt="[next]"/>',
    showing:'Showing',
    to:'to',
    website_label:'website (optional)',
    email_label:'email',
    anonymous:'Anonymous',
    mod_label:'(mod)',
    subscribe:'email me replies',
    add_image:'Add Image Here',
    are_you_sure:'Do you want to flag this comment as inappropriate?',

    reply:'<img src="https://www.htmlcommentbox.com/static/images/reply.png"/> reply',
    flag:'<img src="https://www.htmlcommentbox.com/static/images/flag.png"/> flag',
    like:'<img src="https://www.htmlcommentbox.com/static/images/like.png"/> like',

    /* dates */
    days_ago:'days ago',
    hours_ago:'hours ago',
    minutes_ago:'minutes ago',
    within_the_last_minute:'within the last minute',

    msg_thankyou:'Thank you for commenting!',
    msg_approval:'(this comment is not published until approved)',
    msg_approval_required:'Thank you for commenting! Your comment will appear once approved by a moderator.',

    err_bad_html:'Your comment contained bad html.',
    err_bad_email:'Please enter a valid email address.',
    err_too_frequent:'You must wait a few seconds between posting comments.',
    err_comment_empty:'Your comment was not posted because it was empty!',
    err_denied:'Your comment was not accepted.',
    err_unknown:'Your comment was blocked for unknown reasons, please report this.',
    err_spam:'Your comment was detected as spam.',
    err_blocked:'Your comment was blocked by site policy.',

    /* SETTINGS */
    MAX_CHARS: 8192,
    PAGE:'', /* ID of the webpage to show comments for. defaults to the webpage the user is currently visiting. */
    ON_COMMENT: function(){}, /* Function to call after commenting. */
    RELATIVE_DATES:true /* show dates in the form "X hours ago." etc. */
};
