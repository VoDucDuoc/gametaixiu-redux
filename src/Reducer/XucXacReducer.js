import { PLAY } from "../constants/XucXacConstants";
import { CHOOSE } from "../constants/XucXacConstants";

const initialState = {
  imgInState: [
    { "./img/1.png": 1 },
    { "./img/2.png": 2 },
    { "./img/3.png": 3 },
    { "./img/4.png": 4 },
    { "./img/5.png": 5 },
    { "./img/6.png": 6 },
  ],
  imgShowInState: [],
  clickStart: 0,
  choosen: "",
  result: "",
  win: 0,
};
const XucXacReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY: {
      if (state.choosen === "") {

        return {...state, choosen: 'HAY CHON TAI HOAC XIU'};
      }
      let imgShowInStateNew = [];
      let arrNut = [];
      let resultNew = '';
      let winNew = (state.win);
      for (let index = 0; index < 3; index++) {
        imgShowInStateNew = [
          ...imgShowInStateNew,
          state.imgInState[Math.floor(Math.random() * state.imgInState.length)],
        ];
      }

      imgShowInStateNew.map((item, index) => {
        return Object.entries(item).map(([propsImg, number], index) => {
          arrNut.push(number);
          return arrNut;
        });
      });
      console.log(arrNut);
      let tongNutNew = arrNut.reduce((tongNut, tungNut, index) => {
        return (tongNut += tungNut);
      }, 0);
      if (state.choosen === "TAI") {
        if (tongNutNew >= 11 && tongNutNew <= 17) {
          console.log("youwin!");
          resultNew = 'YOU WIN';
          winNew+=1;
        } else {
          console.log("youlose!");
          resultNew = 'YOU LOSE';

        }
      } else if (state.choosen === "XIU") {
        if (tongNutNew >= 4 && tongNutNew <= 10) {
          console.log("youwin!");
          resultNew = 'YOU WIN';
          winNew+=1;

        } else {
          console.log("youlose!");
          resultNew = 'YOU LOSE';

        }
      }
      let clickStartNew = (state.clickStart += 1);
      return {
        ...state,
        clickStart: clickStartNew,
        imgShowInState: imgShowInStateNew,
        choosen: "",
        result: resultNew,
        win: winNew
      };
    }
    case CHOOSE: {
      let newChoose = {};

      if (action.text === "TAI") {
        newChoose = "TAI";
        console.log(newChoose);
      } else {
        newChoose = "XIU";
        console.log(newChoose);
      }
      return { ...state, choosen: newChoose };
    }
    default:
      return state;
  }
};
export default XucXacReducer;
