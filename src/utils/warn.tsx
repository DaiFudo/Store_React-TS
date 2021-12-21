import { message } from "antd";
/**
 * Призывает пользователя авторизоваться или зарегистрироваться.
 * Функция вызывается на основной странице.
 */
const warn = () => {
  message.error(`Please login or registration`);
};
export default warn;
