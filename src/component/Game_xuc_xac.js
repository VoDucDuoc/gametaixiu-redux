import React, { Component } from 'react'
import Play from './Play'
import Result from './Result'

export default class Game_xuc_xac extends Component {
    render() {
        return (
            <div style={{backgroundImage: `url("./img/bgGame.png")`, height: '100vh', width: '100%'}}>
                <h1 className="pt-5">GAME DO XUC XAC</h1>
                <Play />
                
            </div>
        )
    }
}
