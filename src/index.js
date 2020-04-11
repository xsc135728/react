import React from 'react';
import ReactDom from 'react-dom';


//引入全局样式，字体控制js
import './utils/font';
import './assets/css/index.css'

import Default from "./layouts/default";

import {BrowserRouter as Router, Route,HashRouter} from 'react-router-dom';

import './plugins/axios'

//在react应用内部创建全局属性
import {serverBaseUrl} from './server';
React.baseUrl = serverBaseUrl;
React.Component.prototype.baseUrl=serverBaseUrl;

ReactDom.render(
  
  <HashRouter>
    <Route component={Default}/>
  </HashRouter>
  ,
  document.querySelector('#root'),
);
