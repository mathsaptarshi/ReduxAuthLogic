import ApiUrls from '../../../utils/ApiUrls';
import Api from '../../../utils/Api';
import * as constants from './constants';

// export function actionAuthUser(loginResponse) {
//   return {
//     type: constants.AUTH_USER,
//     loginResponse,
//   };
// }

// export function actionGetJson(jsonResp){
// 	return {
// 		type: constants.GET_JSON,
// 		jsonResp,
// 	};
// }

export function actionLogin(token){
	return {
		type: constants.LOGIN_REQUEST,
		token,
	};
}
export function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    // return fetch(`http://localhost:4000/api/auth/signin`, requestOptions)
	return dispatch => fetch(`http://localhost:4000/api/auth/signin`, requestOptions)
		.then(response=>response.json())
        .then(response => 
        { 
			console.log(response)
			localStorage.setItem('token', response.accessToken);
            dispatch(actionLogin(response.accessToken));
		})
	// .then(user=>user.json())
	// .then((user) => {
		// alert(user.json())
		// alert(JSON.stringify(user))
        // .then(handleResponse)
        // .then(user => {
        //     // store user details and jwt token in local storage to keep user logged in between page refreshes
        //     localStorage.setItem('user', user);
        //     dispatch(actionLogin(user));

        //     return user;
        // });
}

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });

// export function get_sortdata(jsonResp){
// 	return {
// 		type: constants.GET_SORTDATA,
// 		jsonResp,
// 	};
// }

// export function setUserSign(data) {
//   return dispatch => Api.post(ApiUrls.apiLogin, data).then((resp) => {
//     if (resp.success === false) {
//       dispatch(actionAuthUser(null));
//     } else {
//         sessionStorage.setItem('isLogin', true);
//       dispatch(actionAuthUser(resp));
//     }
//   }).catch((error) => {
//     console.log(error);
//   });
// }

// export function getJsonData(postData) {
//   return dispatch => Api.post(ApiUrls.getJson,postData).then((resp) => {
//     if (resp.success === false) {
//       dispatch(actionGetJson(null));
//     } else {
//       dispatch(actionGetJson(resp));
//     }
//   }).catch((error) => {
//     console.log(error);
//   });
// }
// https://mqlt.azurewebsites.net/ptapiqa/api/MarriageBureaus?PageNumber=1&ItemCountPerPage=5&SortField=BureauName&IsSortDescending=false&IsReturnTotalItemCount=true

// export function getJsonData(postData) { 
// 	// let postVal = JSON.stringify(postData);
// 	// alert(postData);
// 	var queryVars = {'PageNumber':postData.PageNumber, 'ItemCountPerPage': postData.ItemCountPerPage, 'Community': postData.Community, 'SortField':postData.SortField, 'IsSortDescending':postData.IsSortDescending, 'IsReturnTotalItemCount':postData.IsReturnTotalItemCount };	
// 	// var queryStringParts = new Array();
// 	var queryStringParts = [];
// 	for(var key in queryVars) {
// 		queryStringParts.push(key + '=' + queryVars[key]);
// 	}
// 	var queryString = queryStringParts.join('&')	
// 	const apiCall=ApiUrls.getJson+'?'+queryString;
// 	// alert(apiCall);
// 	return dispatch => Api.post(apiCall,postData)
// 				.then(function (response) {          
// 					dispatch(actionGetJson(response.results))
// 				})
// 				.catch(function (error) {
// 					console.log(error);
// 				});
// }


// export function getSortData(postData) {
// 	// alert(JSON.stringify(postData))
// 	return dispatch => 
// 			Api.post(ApiUrls.getJson,postData)
// 				.then(function (response) {
// 					//alert(JSON.stringify(response))
// 				 dispatch(get_sortdata(postData))
// 				})
// 				.catch(function (error) {
// 					console.log(error);
// 				});
// }


// export function getJsonData(postData) {
//   return dispatch => Api.post("https://mqlt.azurewebsites.net/ptapiqa/api/MarriageBureaus",
//           {
//             PageNumber: '1',
//             ItemCountPerPage: '10',
//             Community: 'null',
//             SortField: '2',
//             IsSortDescending: '2',
//             IsReturnTotalItemCount: 'false'
//           })
//   .then((resp) => {
//     if (resp.success === false) {
//       dispatch(actionGetJson(null));
//     } else {
//       dispatch(actionGetJson(resp));
//     }
//   }).catch((error) => {
//     console.log(error);
//   });
// }
