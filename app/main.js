//main.js

'use strict'
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Home} from './component'

let main = function(){
    render(<Home url="https://raw.githubusercontent.com/winds18/data/master/data.json"/>,document.getElementById('main'));
}

main();
