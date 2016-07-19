//component.js

'use strict'
import React from 'react'
import $ from 'jquery'
import './main.scss'

export class Home extends React.Component{
    constructor(arg){
        super(arg);
        this.url = arg.url;
        this.state = {data:[]};
    }
    loadDataFromServer(){
        $.ajax({
            url:this.url,
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({data:data})
            }.bind(this),
            error:function(xhr,status,err){
                console.error(this.url,status,err.toString());
            }.bind(this)
        });
    }
    componentDidMount(){
        this.loadDataFromServer();
    }
    render(){
        return(
            <div>
                <Header />
                <Table />
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(arg) {
        super(arg);
        console.log(arg);
    }
    render(){
        return(
            <header>
                <div className="top">
                    FellowTrucker
                </div>
                <i className="iconfont icon-alignjustify"></i>
                <div className="banner">
                    <h2>OUR MISSON</h2>
                    <nav>
                        <a href="">CONNECT</a>
                        <a href="">SHARE</a>
                        <a href="">EMPROER</a>
                    </nav>
                    <p>Help fellow truckers,join <a href="">felltrucker.com</a></p>
                    <p>Share your rates,make fair rate for everyone.</p>
                </div>
            </header>
        );
    }
}

class Table extends React.Component {
    constructor(arg) {
        super(arg);
    }
    render(){
        return(
            <ul className="list">
                <li className="item-1">
                    <span className="meta">Age</span>
                    <span className="txt">00d:14h:01min</span>
                </li>
                <li className="item-2 add">
                    <span className="meta">Book&nbsp;Date</span>
                    <span className="txt"></span>
                </li>
                <li className="item-3">
                    <span className="meta">Rate</span>
                    <span className="txt"></span>
                </li>
                <li className="item-4">
                    <span className="meta">P/U&nbsp;Date</span>
                    <span className="txt"></span>
                </li>
                <li className="item-5">
                    <span className="meta">Del&nbsp;Date</span>
                    <span className="txt"></span>
                </li>
                <li className="item-6">
                    <span className="meta">Origin</span>
                    <span className="txt"></span>
                </li>
                <li className="item-7">
                    <span className="meta">Destination</span>
                    <span className="txt"></span>
                </li>
                <li className="item-8">
                    <span className="meta">Trailer</span>
                    <span className="txt"></span>
                </li>
                <li className="item-9">
                    <span className="meta">Picks/Drop</span>
                    <span className="txt"></span>
                </li>
                <li className="item-10">
                    <span className="meta">Weight</span>
                    <span className="txt"></span>
                </li>
                <li className="item-11">
                    <span className="meta">F/P</span>
                    <span className="txt"></span>
                </li>
                <li className="item-12">
                    <span className="meta">Company</span>
                    <span className="txt"></span>
                </li>
            </ul>
        );
    }
}
