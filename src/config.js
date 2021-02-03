//영호님 주소
export const SERVER = "http://54.175.222.189:8000";
export const SERVER_SERVICE = `${SERVER}/services/receivedRequest`;
export const SERVER_DETAIL = `${SERVER}/services/requestDetail?requestId`;
export const SERVER_POST = `${SERVER}/services/createQuotation?requestId`;
export const QUOTATIONLIST_POST = `${SERVER}/services/quotationList`;
export const DETAIL_QUOTATIONLIST = `${SERVER}/services/detailQuotationList?requestId`;
export const USER_PROFILE = `${SERVER}/users/profile`;

//기열님 주소
export const SERVER_LOCAL = "http://10.58.1.14:8000";
export const SIGNUP_API = `${SERVER}/users/signup`;
export const SIGNIN_API = `${SERVER}/users/signin`;
export const KAKAO_LOGIN_API = `${SERVER}/users/kakao_signin`;
export const FIND_SEND = `${SERVER}/users/password_reset`;
export const BEST_SIGNUP = `${SERVER}/users/category`;
export const BEST_SIGNUP_QUESTION = `${SERVER}/users/question`;
export const BEST_SIGNUP_TEMP_MASTER = `${SERVER}/users/temp_master`;

//호익님 주소
export const SERVER_JW = "http://54.175.222.189:8000";
export const CATEGORY_API = `${SERVER_JW}/services/categories`;
export const SERVICE_LIST_API = `${SERVER_JW}/services/services`;
export const REGION_LIST_API = `${SERVER_JW}/services/regions`;

// hoic server
export const SERVICE_DETAIL_API = `${SERVER_JW}/services/details?`;
export const SERVICE_QUESTIONS_API = `${SERVER_JW}/services/questions`;
export const SERVICE_REGIONS_API = `${SERVER_JW}/services/regions`;
export const SERVICE_SUBMIT_API = `${SERVER_JW}/services/requests?`;
export const MACHING_API = `${SERVER_JW}/services/matchMasters?`;
export const SERVICE_SEARCH_API = `${SERVER_JW}/services/search?`;
