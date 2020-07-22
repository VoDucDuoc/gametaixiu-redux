import React, { Component } from "react";
import { connect } from "react-redux";
import { chooseAction } from "../action/XucXacAction";
import Result from "./Result";
class Play extends Component {
  renderXucXac = () => {
    let { imgShow, img, clickStart } = this.props;
    if (clickStart !== 0) {
      return imgShow.map((item, index) => {
        return Object.entries(item).map(([propsImg, number], index) => {
          return (
            <img src={propsImg} key={index} style={{ width: 50, height: 50 }} />
          );
        });
      });
    } else {
      let arr = [];
      let arrImg = [];
      img.map((item, indexItem) => {
        Object.entries(item).map(([propsImg, number], index) => {
          arr.push(propsImg);
        });
      });
      for (let index = 0; index < 3; index++) {
        arrImg = [
          ...arrImg,
          <img
            src={arr[index]}
            key={index}
            style={{ width: 50, height: 50 }}
          />,
        ];
      }
      return arrImg;
    }
  };
  renderText = () =>{
    let {result} = this.props;
    if(result === 'YOU WIN'){
      return (
        <div className="display-4 text-success bg-light">YOU WIN</div>
      )
    }
    if(result === 'YOU LOSE'){
      return (
        <div className="display-4 text-danger bg-light">YOU LOSE</div>
      )
    }
  }
  render() {
    return (
      <div className=" container px-5">
        <div className="row justify-content-between">
          <div
            className=" text-center text-white display-1"
            style={{
              lineHeight: "200px",
              borderRadius: 10,
              width: 200,
              height: 200,
              backgroundColor: "blue",
              cursor: "pointer",
            }}
            onClick={() => {
              this.props.choose("TAI");
            }}
          >
            Tai
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div>{this.renderXucXac()}</div>
            {this.renderText()}
          </div>
          <div
            className=" text-center text-white display-1"
            style={{
              lineHeight: "200px",
              borderRadius: 10,
              width: 200,
              height: 200,
              backgroundColor: "blue",
              cursor: "pointer",
            }}
            onClick={() => {
              this.props.choose("XIU");
            }}
          >
            Xiu
          </div>
        </div>
        <Result choosen={this.props.choosen} banChoi={this.props.clickStart} win={this.props.win} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    img: state.XucXacReducer.imgInState,
    clickStart: state.XucXacReducer.clickStart,
    imgShow: state.XucXacReducer.imgShowInState,
    choosen: state.XucXacReducer.choosen,
    clickStart: state.XucXacReducer.clickStart,
    result: state.XucXacReducer.result,
    win: state.XucXacReducer.win,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    choose: (name) => dispatch(chooseAction(name)),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(Play);
