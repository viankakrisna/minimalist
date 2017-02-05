import Counter from '../components/Counter';
import Header from '../components/Header';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';
import Tumblr from '../components/Tumblr';
import Todo from '../components/Todo';
import Match from '../components/Match';

import { e, div } from '../lib/elements';
import styled from '../lib/styled';
import theme from '../lib/theme';
import { cardMixin } from '../lib/mixins';
import { zoomIn } from '../lib/animation';

const App = styled(function App(props) {
    return div(
        { className: props.className },
        e(Header),
        e(Match, { pathname: '/' }, e(Home)),
        e(Match, { pathname: '/counter' }, e(Counter)),
        e(Match, { pathname: '/login' }, e(Login)),
        e(Match, { pathname: '/tumblr' }, e(Tumblr)),
        e(Match, { pathname: '/register' }, e(Register)),
        e(Match, { pathname: '/todo' }, e(Todo))
    );
})`

* {
  box-sizing: border-box;
}

html{
  font-family:sans-serif;
  -ms-text-size-adjust:100%;
  -webkit-text-size-adjust:100%
}
article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{
  display:block
}

audio,canvas,progress,video{
  display:inline-block
}

audio:not([controls]){
  display:none;height:0
}

progress{
  vertical-align:baseline
}

[hidden],template{
  display:none
}

a{
  background-color:transparent;
  -webkit-text-decoration-skip:objects
}

a:active,a:hover{
  outline-width:0
}

abbr[title]{
  border-bottom:none;
  text-decoration:underline;
  text-decoration:underline dotted
}

b,strong{
  font-weight:inherit;
  font-weight:bolder
}

dfn{
  font-style:italic
}

h1{
  font-size:2em;
  margin:.67em 0
}

mark{
  background-color:#ff0;
  color:#000
}

small{
  font-size:80%
}

sub,sup{
  font-size:75%;
  line-height:0;
  position:relative;
  vertical-align:baseline
}

sub{bottom:-.25em}
sup{top:-.5em}
img{
  border-style:none
}

svg:not(:root){
  overflow:hidden
}

code,kbd,pre,samp{
  font-family:monospace,monospace;font-size:1em
}

figure {
    margin: 1em 40px
}
hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}
button,
input,
optgroup,
select,
textarea {
    font: inherit;
    margin: 0
}
optgroup {
    font-weight: 700
}
button,
input {
    overflow: visible
}
button,
select {
    text-transform: none
}
[type=reset],
[type=submit],
button,
html [type=button] {
    -webkit-appearance: button
}
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
    border-style: none;
    padding: 0
}
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
    outline: 1px dotted ButtonText
}
fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em
}
legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}
textarea {
    overflow: auto
}
[type=checkbox],
[type=radio] {
    box-sizing: border-box;
    padding: 0
}
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
    height: auto
}
[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}
::-webkit-input-placeholder {
    color: inherit;
    opacity: .54
}
::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}
html {
    font: 100%/1.5em -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
}
* {
    box-sizing: inherit;
}
*:before {
    box-sizing: inherit;
}
*:after {
    box-sizing: inherit;
}
body {
    color: hsla(204, 12.449720506%, 0%, 0.77);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
}
img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
h1 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    font-size: 2.25rem;
    line-height: 3rem;
}
h2 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    font-size: 1.83712rem;
    line-height: 2.25rem;
}
h3 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    font-size: 1.5rem;
    line-height: 2.25rem;
}
h4 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    font-size: 1.14471rem;
    line-height: 1.5rem;
}
h5 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    font-size: 0.87358rem;
    line-height: 1.5rem;
}
h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    font-size: 0.76314rem;
    line-height: 1.5rem;
}
hgroup {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
ul {
    margin-left: 1.5rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    list-style-position: outside;
    list-style-image: none;
}
ol {
    margin-left: 1.5rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    list-style-position: outside;
    list-style-image: none;
}
dl {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
figure {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
    line-height: 1.5rem;
}
table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border-collapse: collapse;
    width: 100%;
}
fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
blockquote {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 0;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.22474rem;
    line-height: 1.5rem;
    border-left: 0.25rem solid #eceeef;
}
form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.5rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
}
address {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
}
b {
    font-weight: bold;
}
strong {
    font-weight: bold;
}
dt {
    font-weight: bold;
}
th {
    font-weight: bold;
}
li {
    margin-bottom: calc(1.5rem / 2);
}
ol li {
    padding-left: 0;
}
ul li {
    padding-left: 0;
}
li > ol {
    margin-left: 1.5rem;
    margin-bottom: calc(1.5rem / 2);
    margin-top: calc(1.5rem / 2);
}
li > ul {
    margin-left: 1.5rem;
    margin-bottom: calc(1.5rem / 2);
    margin-top: calc(1.5rem / 2);
}
blockquote *:last-child {
    margin-bottom: 0;
}
li *:last-child {
    margin-bottom: 0;
}
p *:last-child {
    margin-bottom: 0;
}
li > p {
    margin-bottom: calc(1.5rem / 2);
}
code {
    font-size: 0.85rem;
    line-height: 1.5rem;
}
kbd {
    font-size: 0.85rem;
    line-height: 1.5rem;
}
samp {
    font-size: 0.85rem;
    line-height: 1.5rem;
}
abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
}
acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
}
abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
}
thead {
    text-align: left;
}
td,
th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: tnum;
    -moz-font-feature-settings: tnum;
    -ms-font-feature-settings: tnum;
    -webkit-font-feature-settings: tnum;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: calc(0.75rem - 1px);
}
th:first-child,
td:first-child {
    padding-left: 0;
}
th:last-child,
td:last-child {
    padding-right: 0;
}
blockquote >:last-child {
    margin-bottom: 0;
}
blockquote cite {
    font-size: 1rem;
    line-height: 1.5rem;
    color: hsla(204, 5.275997423999999%, 0%, 0.46);
    font-weight: 400;
    font-style: normal;
}

body {
  margin: 0;
  padding: 0;
}


& {
  padding-top: 3.5em;
  background: #f1f1f1;
  min-height: 100vh;
  overflow: hidden;
}

& .page-header {
  background: ${theme.pageHeaderBg};
  overflow: hidden;
  margin-bottom: -8.5em;
  color: white;
  text-align: center;
  padding: 4em 1em 8em;
  animation: ${zoomIn} 250ms;
  transform-origin: top center;
}
& .page-content {
  ${cardMixin}
}
@media (max-width: 767px){
  & .page-content {
     margin: 1em;
     max-width: calc(100% - 2em);
  }
}
`;

export default App;
