const CLIENT_ID = '130990797073-1asjn8nhnf3rm6aub5vrgqdf4m4bforv.apps.googleusercontent.com';

const   DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
const authorizeButton = document.querySelector('#authorize-button');
const signoutButton = document.querySelector('#signout-button')
const content  = document.querySelector('#content')
const channelForm  = document.querySelector('#channel-form')
const channelInput  = document.querySelector('#channel-input')
const videoContainer  = document.querySelector('#video-container')


