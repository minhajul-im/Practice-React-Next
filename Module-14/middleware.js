import { loginMiddlewareFunc } from "./utils/loginMiddlewareFunc";
import { registerMiddlewareFunc } from "./utils/registerMiddlewareFunc";

export const middleware = async (req) => {
  if (req.nextUrl.pathname.startsWith("api/login")) {
    return registerMiddlewareFunc(req);
  }
  if (req.nextUrl.pathname.startsWith("api/dashboard")) {
    return loginMiddlewareFunc(req);
  }
};
