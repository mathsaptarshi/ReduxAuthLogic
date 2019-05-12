import createReducer from '../../../global/createReducer';
import * as constants from '../../action/appActions/constants';

const intialState = {
  loginResponse: null,
  jsonResp:[],
  totalRecords:0,
};
// export const appReducer = createReducer(intialState, {
//   [constants.AUTH_USER](state, action) {
//     return Object.assign({}, state, {
//       loginResponse: action.loginResponse,
//     });
//   },

//   [constants.GET_JSON](state, action) {
//     return Object.assign({}, state, {
//       jsonResp: action.jsonResp,
//     });
//   },
// });


export const appReducer = createReducer(intialState, {
  // [constants.AUTH_USER](state, action) {
  //   return Object.assign({}, state, {
  //     loginResponse: action.loginResponse,
  //   });
  // },

  [constants.GET_JSON](state, action) {
    // console.log('inside reducer',action.jsonResp)
    return Object.assign({}, state, {
      jsonResp: action.jsonResp.SearchResults,
      totalRecords:action.jsonResp.TotalItemCount
    });
  },
  [constants.GET_SORTDATA](state, action) {
    // console.log('inside reducer',action.jsonResp)
    return Object.assign({}, state, {
      jsonResp: action.jsonResp,
    });
  },
});
