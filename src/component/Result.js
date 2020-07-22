import React, { Component } from 'react'
import { connect } from 'react-redux';
import { playAction } from '../action/XucXacAction';

class Result extends Component {
    render() {
        let{choosen, banChoi, win} = this.props;
        return (
            <div className="container">
                <h1>BAN CHON: <span className="text-danger">{choosen}</span></h1>
                <h2>SO BAN THANG: <span className="text-success">{win}</span></h2>
                <h2>TONG SO BAN CHOI: <span className="text-primary">{banChoi}</span></h2>
                <button onClick={()=>{
                    this.props.play();
                }} className="btn btn-success">Play game</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        play: () => dispatch(playAction()),
    };
};
export default connect (null, mapDispatchToProps)(Result)