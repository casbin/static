:root {
    --box-background-color: #18222d;
    --box-background-alt-color: #393f4e;
    --box-background-hover-color: #001d25;
    --box-background-darker-color: #001d25;
    --box-foreground-color: #d1d5d9;
    --box-border-color: #22303f;
    --box-border-focus-color: #3e5874;
    --menu-shadow-color: rgba(200, 200, 255, 0.2);
    --ads-list-foreground-color: var(--box-foreground-color);
    --link-color: #9caec7;
    --link-visited-color: #393f4e;
    --link-hover-color: #a9bcd6;
    --color-gray: #738292;
    --color-fade: #b2c3d4
}

body {
    background-color: #22303f
}

#Logo, #LogoMobile {
    background-image: url(/static/img/v2ex-alt@2x.png)
}

#Wrapper {
    background-color: #22303f
}

#Top {
    background-color: #18222d;
    border-bottom: 1px solid #22303f
}

#search-container {
    background-color: #001d25;
    border-color: #001d25
}

#search-container.active {
    border-color: #3e5874
}

#search-container::before {
    background-image: url(/static/img/search_icon_dark.png)
}

#search-container #search {
    color: var(--box-foreground-color)
}

#search-container #search-result {
    box-shadow: 0 2px 25px var(--menu-shadow-color)
}

#search-container #search-result .search-item {
    color: #b2c3d4
}

#Tabs {
    background-color: #18222d
}

#SecondaryTabs {
    background-color: #001d25
}

#Bottom {
    color: #9099aa;
    background-color: #18222d
}

#DigitalOcean {
    background-image: url(/static/img/do_logo_white.png)
}

#qbar {
    background-image: url(/static/img/qbar_dark@2x.png);
    transition: background-image .15s
}

.qbar_focus {
    background-image: url(/static/img/qbar_dark_focus@2x.png) !important
}

#q {
    color: #d1d5d9
}

h1 {
    color: #d1d5d9
}

h2 {
    border-color: #22303f
}

hr {
    color: #22303f;
    background-color: #22303f
}

a:active, a:link, a:visited {
    color: #9caec7
}

a:hover {
    color: #a9bcd6
}

a.topic-link:active, a.topic-link:link {
    color: #9caec7
}

a.topic-link:visited {
    color: #393f4e
}

a.topic-link:hover {
    color: #a9bcd6
}

a.op:active, a.op:link, a.op:visited {
    border: 1px solid transparent;
    color: #9caec7;
    background-color: transparent
}

a.op:hover {
    border: 1px solid transparent;
    color: #a9bcd6;
    background-color: #393f4e
}

a.vote:active, a.vote:link, a.vote:visited {
    border: 1px solid #9caec7;
    color: #9caec7;
    background-color: transparent
}

a.vote:hover {
    border: 1px solid #a9bcd6;
    color: #a9bcd6;
    background-color: transparent
}

a.count_livid:active, a.count_livid:link {
    background-color: #393f4e;
    color: #d1d5d9
}

a.count_livid:visited, a.count_orange:visited {
    background-color: #001d25;
    color: #393f4e
}

.cell:hover a.thank:hover, .inner:hover a.thank:hover {
    background-color: #001d25;
    color: #a9bcd6
}

a.top:link, a.top:visited {
    color: #9caec7;
    text-decoration: none
}

a.top:hover {
    color: #a9bcd6;
    text-decoration: none
}

a.top:active {
    color: #6b7788;
    text-decoration: none
}

a.black:link, a.black:visited {
    color: #9caec7
}

a.black:hover {
    color: #a9bcd6
}

a.tab:active, a.tab:link, a.tab:visited {
    color: #9caec7
}

a.tab:hover {
    background-color: #393f4e;
    color: #a9bcd6
}

a.tab_current:active, a.tab_current:link, a.tab_current:visited {
    background-color: #393f4e;
    color: #a9bcd6
}

.tab-alt:hover {
    border-color: var(--box-border-color)
}

.tab-alt.active {
    border-color: var(--box-foreground-color)
}

.page_normal:active, .page_normal:link, .page_normal:visited {
    background-color: transparent;
    border: 1px solid #22303f
}

.page_normal:hover {
    color: #d1d5d9
}

.page_current:active, .page_current:link, .page_current:visited {
    background-color: #393f4e;
    border: 1px solid #393f4e;
    color: #d1d5d9
}

.page_input {
    border: 1px solid #22303f;
    background-color: transparent;
    color: #d1d5d9
}

.page_input:focus {
    border: 1px solid #22303f;
    color: #d1d5d9
}

.box {
    background-color: #18222d;
    color: #d1d5d9;
    border-bottom: none
}

.box-transparent {
    color: #d1d5d9
}

.cell_ops {
    background-color: #18222d;
    color: #d1d5d9;
    border-bottom: 1px solid #22303f
}

.cell_tab:hover {
    color: #a9bcd6;
    border-bottom: 3px solid #a9bcd6
}

.cell_tab_current:link, .cell_tab_current:visited {
    border-bottom: 3px solid #9caec7
}

.dock_area {
    background-color: #001d25;
    background-image: none
}

.subtle {
    background-color: #18222d;
    border-left: 3px solid #393f4e;
    border-bottom: 1px solid #22303f
}

.payload {
    background-color: #001d25
}

.item_title {
    text-shadow: none
}

.cell {
    border-bottom: 1px solid #22303f
}

.cell:last-child {
    border-bottom: none
}

.valley {
    border-bottom: 1px solid #22303f
}

.cell_tabs {
    border-bottom: 1px solid #22303f
}

.header {
    border-bottom: 1px solid #22303f
}

.outdated {
    background-color: #393f4e;
    color: #001d25;
    border-color: #393f4e
}

.topic_content {
    color: #d1d5d9
}

.topic_stats {
    color: #b2c3d4;
    text-shadow: none
}

.topic_info {
    color: #738292
}

.reply_content {
    color: #d1d5d9
}

.item_node {
    border-color: #9caec7
}

.item_node:hover {
    border-color: #a9bcd6;
    color: #a9bcd6
}

.item_node:active {
    background-color: #001d25
}

.tag:link, .tag:visited {
    background-color: #001d25;
    color: #9caec7
}

.tag:hover {
    background-color: #393f4e;
    color: #a9bcd6
}

a.node:active, a.node:link, a.node:visited {
    background-color: #393f4e;
    color: #9caec7
}

a.node:hover {
    background-color: #9caec7;
    color: #001d25
}

div.node:hover {
    background-color: #001d25;
    box-shadow: none
}

.note_item {
    border-bottom: 1px solid #22303f
}

.note_item:hover {
    background-color: #001d25
}

.note_editor {
    color: #d1d5d9
}

a.dark:active, a.dark:link, a.dark:visited {
    color: #6b7788
}

a.dark:hover {
    color: #a9bcd6
}

.balance_area, a.balance_area:link, a.balance_area:visited {
    background: #606c88;
    background: -moz-linear-gradient(top, #606c88 0, #3f4c6b 100%);
    background: -webkit-linear-gradient(top, #606c88 0, #3f4c6b 100%);
    background: linear-gradient(to bottom, #606c88 0, #3f4c6b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#606c88", endColorstr="#3f4c6b", GradientType=0);
    color: #d1d5d9;
    text-shadow: none
}

.ml, .mle, .mll, .sl, .sll, .sls {
    background-color: #18222d;
    border: 1px solid #393f4e;
    color: #d1d5d9
}

::-webkit-input-placeholder {
    color: #60606f
}

:-moz-placeholder {
    color: #60606f
}

::-moz-placeholder {
    color: #60606f
}

:-ms-input-placeholder {
    color: #60606f
}

.new-title-input {
    background-color: #18222d;
    border: none;
    color: #d1d5d9
}

.new-title-input:focus {
    border: none;
    background-color: #001d25
}

.ml:focus, .mle:focus, .mll:focus, .sl:focus, .sll:focus, .sls:focus {
    border: 1px solid #3e5874;
    background-color: #001d25
}

.no {
    background-color: #001d25;
    color: #b2c3d4
}

.topic_buttons {
    background: #18222d;
    background: -moz-linear-gradient(top, #18222d 0, #001d25 100%);
    background: -webkit-linear-gradient(top, #18222d 0, #001d25 100%);
    background: linear-gradient(to bottom, #18222d 0, #001d25 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$box-background-color", endColorstr="$box-background-darker-color", GradientType=0)
}

a.tab:active, a.tb:link, a.tb:visited {
    text-shadow: none;
    color: #9caec7
}

a.tb:hover {
    background-color: #393f4e;
    color: #a9bcd6
}

.social_label:link, .social_label:visited {
    background-color: #22303f
}

.social_label:hover {
    background-color: #393f4e;
    color: #a9bcd6
}

.social_label:active {
    background-color: #001d25;
    color: #a9bcd6
}

.super.button {
    background-image: none;
    background: #18222d;
    background: linear-gradient(to bottom, #9caec7 0, #6b7788 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$link-primary-color", endColorstr="$link-darker-color", GradientType=0);
    text-shadow: none;
    color: #18222d;
    border: none;
    border-top: 1px solid #b2c3d4;
    box-shadow: none;
    border-radius: 3px;
    padding: 4px 15px;
    font-weight: 500;
    line-height: 22px
}

.normal.button:hover:enabled {
    background: linear-gradient(to bottom, #99abc5 0, #697585 100%) !important;
    text-shadow: none;
    border: none;
    border-top: 1px solid #b2c3d4;
    font-weight: 500;
    box-shadow: 0 0 0 2px rgba(178, 195, 212, .1)
}

.normal.button:active:enabled {
    background-color: #22303f;
    background: linear-gradient(to bottom, #7b93b5 0, #555e6b 100%) !important;
    text-shadow: none;
    border: none;
    border-top: 1px solid #91aac2;
    font-weight: 500
}

.normal_page_right.button {
    text-shadow: none;
    border-left: 1px solid rgba(36, 48, 64, .6)
}

.normal_page_right.button:disabled {
    background-color: transparent !important;
    box-shadow: none
}

.disable_now {
    color: rgba(34, 48, 63, .5) !important;
    background-color: transparent !important
}

.hover_now {
    background: linear-gradient(to bottom, #8fa3c0 0, #626d7d 100%) !important;
    text-shadow: none !important;
    box-shadow: none !important;
    border-top: 1px solid #a5b9cd !important
}

.active_now {
    background: linear-gradient(to bottom, #758eb1 0, #505966 100%) !important;
    color: #a9bcd6;
    border-top: 1px solid #98afc5 !important
}

.special.button {
    color: #fc0;
    border: none;
    background: linear-gradient(to bottom, #fc0 0, #d6ab00 100%);
    transition: color .1s, border .1s;
    color: #000;
    border-top: 1px solid rgba(255, 255, 255, .7);
    text-shadow: 0 1px 0 rgba(255, 255, 255, .25)
}

.special.button:hover {
    text-shadow: none;
    color: #333;
    border: none;
    background: linear-gradient(to bottom, #ebbc00 0, #c29b00 100%);
    border-top: 1px solid rgba(255, 255, 255, .7);
    text-shadow: 0 1px 0 rgba(255, 255, 255, .25);
    box-shadow: 0 0 0 2px rgba(255, 204, 0, .25)
}

.special.button:active {
    background: linear-gradient(to bottom, #d6ab00 0, #ad8a00 100%);
    border: none;
    border-top: 1px solid rgba(255, 255, 255, .7);
    text-shadow: 0 1px 0 rgba(255, 255, 255, .25)
}

.inverse.button {
    border: none
}

.inverse.button:hover {
    box-shadow: none;
    text-shadow: none;
    border: none;
    color: #22303f
}

.inverse.button:active {
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, .45);
    box-shadow: 0 2px 5px rgba(0, 0, 0, .5) inset
}

table.data td.h, table.data th.h {
    border-right: 1px solid #22303f;
    border-bottom: 1px solid #22303f;
    text-shadow: none;
    background: #18222d;
    background: -moz-linear-gradient(top, #18222d 0, #001d25 100%);
    background: -webkit-linear-gradient(top, #18222d 0, #001d25 100%);
    background: linear-gradient(to bottom, #18222d 0, #001d25 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$box-background-color", endColorstr="$box-background-darker-color", GradientType=0)
}

table.data td.d {
    border-right: 1px solid #22303f;
    border-bottom: 1px solid #22303f
}

.backstage_node_access {
    border-bottom: 1px solid #22303f
}

.backstage_node_access_op {
    background-color: #001d25
}

.node_impressions {
    border-bottom: 1px solid #22303f
}

.node_impressions_numbers {
    background-color: #001d25
}

.sidebar_compliance {
    background-color: #001d25;
    padding: 5px;
    font-size: 10px;
    color: #d1d5d9;
    line-height: 100%
}

a.img_sq, a.img_sqm {
    background-color: transparent;
    transition: background-color .2s
}

a.img_sq:hover, a.img_sqm:hover {
    background-color: #001d25
}

.message {
    background-color: #18222d;
    border-bottom: 1px solid #22303f;
    border-left: none;
    color: #fc0
}

#MySQL {
    border-top: 2px solid #22303f
}

#nodes-sidebar {
    background-color: #18222d
}

.bs_left {
    border-bottom: 1px solid #22303f;
    border-right: 1px solid #22303f
}

.bs_left2 {
    border-bottom: 1px solid #22303f;
    border-left: 1px solid #22303f;
    border-right: 1px solid #22303f
}

.bs_right {
    border-bottom: 1px solid #22303f;
    background-color: #001d25
}

.alt {
    background-color: #001d25
}

.grid_item {
    background-color: #18222d;
    transition: background-color .1s
}

.grid_item:hover {
    background-color: #001d25
}

.status_editor {
    color: #d1d5d9
}

.status {
    border-bottom: 1px solid #22303f
}

.status:hover {
    background-color: #001d25
}

.status:hover .status_ops {
    color: #fff
}

.status:hover .s_ops:link {
    color: #a9bcd6
}

.s_ops:active, .s_ops:link, .s_ops:visited {
    color: #d1d5d9
}

.status:hover .s_ops:link {
    color: #d1d5d9
}

.status:hover .s_ops:hover {
    color: #a9bcd6
}

.fade {
    color: #b2c3d4
}

.thanked {
    display: inline-block;
    background-color: #001d25;
    color: #b2c3d4;
    border-radius: 3px
}

.topic_thanked {
    font-size: 11px;
    color: #b2c3d4;
    text-shadow: none
}

#Singleton {
    border-bottom: 1px solid #22303f
}

#Navcol {
    background-color: #001d25
}

#Maincol {
    background-color: #18222d;
    color: #d1d5d9
}

#Rightcol {
    background-color: #001d25
}

#page-outline-title {
    background-color: #001d25;
    color: var(--box-foreground-color)
}

.page-outline-item:hover {
    background-color: #18222d;
    color: #d1d5d9
}

ul.nav li a.nav_item_current, ul.nav li a.nav_item_current:visited {
    background-color: #18222d;
    color: #d1d5d9
}

ul.nav li a.nav_item:hover {
    background-color: #22303f;
    color: #a9bcd6
}

.footnotes {
    background-color: #393f4e;
    color: #b2c3d4
}

.markdown_body table tr {
    border-top: 1px solid #22303f;
    background-color: #18222d
}

.markdown_body table tr:nth-child(2n) {
    background-color: #001d25
}

.markdown_body table tr th {
    border: 1px solid #393f4e;
    background-color: #393f4e;
    color: #fff
}

.markdown_body table tr td {
    border: 1px solid #22303f
}

a.black_alt:link, a.black_alt:visited {
    color: #9caec7
}

a.black_alt:hover {
    color: #a9bcd6
}

.convert_input {
    background-color: #18222d;
    border: 1px solid #22303f;
    color: var(--box-foreground-color)
}

.item_hot_topic_title {
    text-shadow: none
}

#ico-select-language {
    filter: invert(100%)
}

.member-activity-bar {
    background-color: #001d25
}

.member-activity-start {
    background-color: #9caec7
}

.ago {
    color: #738292
}

.gray {
    color: #738292
}

.status_time {
    color: #738292
}

.CodeMirror {
    border: 1px solid #22303f
}

.image-edit-left {
    background-color: #001d25
}

.lang-selector:link, .lang-selector:visited {
    border-bottom: 1px solid #22303f
}

.lang-selector:hover {
    background-color: #001d25
}

.light-toggle:hover {
    text-decoration: none
}

pre {
    background-color: #1d1f21
}

.reply-box-sticky {
    background-color: var(--box-background-alt-color)
}

#undock-button {
    display: none
}

#no-comments-yet {
    text-shadow: none;
    border: 2px dashed rgba(216, 216, 255, .2);
    color: rgba(216, 216, 255, .2)
}

#site-search {
    background-image: url(/static/img/search-bg-night.png?v=1)
}

.settings.block .block-stat:nth-child(2n) {
    background-color: var(--box-background-darker-color)
}

.settings.privacy .privacy-settings-form > div:nth-child(2n) {
    background-color: var(--box-background-darker-color)
}

.game-screenshots {
    background-color: var(--box-background-hover-color)
}

#my-nodes {
    background-color: #18222d
}

.fav-node {
    background-color: #18222d;
    transition: background-color .1s
}

.fav-node:hover {
    background-color: #001d25
}

.image-grid a.image-grid-item {
    background-color: transparent
}

.image-grid a.image-grid-item:hover {
    background-color: var(--box-background-darker-color)
}

.image-view {
    background-color: transparent
}

.image-view:hover {
    background-color: var(--box-background-darker-color)
}

.image-edit .image-edit-info {
    background-color: var(--box-background-darker-color)
}

#logo {
    background-color: #22303f;
}

.CodeMirror-sizer {
    background-color: #22303f;
}

.CodeMirror-scroll {
    background-color: #22303f;
}

.react-codemirror2 {
    background-color: #22303f;
}