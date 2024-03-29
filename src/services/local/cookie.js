import Cookies from 'js-cookie';

export const setToken = ({ token }) => {
  // Thay thế "your_auth_token" bằng mã thông báo của bạn
  const authToken = token;
  //   var maxAge = 7 * 24 * 60 * 60;
  // Tạo cookie với tên "authToken" và giá trị là mã thông báo của bạn
  //   document.cookie = `authToken=${authToken};max-age=${maxAge}; path=/; Secure`;
  Cookies.set('authToken', authToken, { expires: 7, path: '/' });
};

export const removeToken = () => {
  Cookies.remove('authToken');
};

export const getCookie = (name) => {
  return Cookies.get(name);
};
