//영호님 주소
export const SERVER = "http://54.175.222.189:8000";
export const SERVER_SERVICE = `${SERVER}/services/receivedRequest`;
export const SERVER_DETAIL = `${SERVER}/services/requestDetail?requestId`;
export const SERVER_POST = `${SERVER}/services/createQuotation?requestId`;

//기열님 주소
export const SERVER_LOCAL = "http://10.58.0.86:8000";
export const SIGNUP_API = `${SERVER}/users/signup`;
export const SIGNIN_API = `${SERVER}/users/signin`;
export const KAKAO_LOGIN_API = `${SERVER}/users/kakao_signin`;
export const FIND_SEND = `${SERVER}/users/password_reset`;

//호익님 주소
export const SERVER_JW = "http://10.58.1.150:8000";
export const CATEGORY_API = `${SERVER_JW}/services/categories`;
export const SERVICE_LIST_API = `${SERVER_JW}/services/services`;
export const REGION_LIST_API = `${SERVER_JW}/services/regions`;
export const SERVICE_DETAIL_API = `${SERVER_JW}/services/details?serviceId=1`;
