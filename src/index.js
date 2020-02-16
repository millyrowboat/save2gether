import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyD0ia0VEF7MMV8jHRFOIpV95FniDYR1DXA',
  authDomain: 'save2gether-e9021.firebaseapp.com',
  databaseURL: 'https://save2gether-e9021.firebaseio.com',
  projectId: 'save2gether-e9021',
  storageBucket: 'save2gether-e9021.appspot.com',
  messagingSenderId: '1060680046527',
  appId: '1:1060680046527:web:a4074567f0eb82071e730a'
}

firebase.initializeApp(firebaseConfig)

var root = document.getElementById('root')
ReactDOM.render(<App database={firebase.database} />, root)
