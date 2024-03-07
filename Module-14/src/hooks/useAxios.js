import axios from "axios";
import { useEffect } from "react";

import { useAuth } from "./useAuth";
import { newAxios } from "../apiUrl";
import { base_url } from "../services";

export const useAxios = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const requestIntercept = newAxios.interceptors.request.use(
      (config) => {
        const authToken = auth?.token;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = newAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalReq = error.config;

        if (error.response.status === 401 && !originalReq._retry) {
          originalReq._retry = true;

          const refreshToken = auth?.refreshToken;
          const res = await axios.post(`${base_url}/auth/refresh-token`, {
            refreshToken,
          });
          const { token } = res.data;

          setAuth({ ...auth, authToken: token });

          originalReq.headers.Authorization = `Bearer ${token}`;
          return axios.originalReq;
        }
        return Promise.reject(error);
      }
    );

    return () => {
      newAxios.interceptors.request.eject(requestIntercept);
      newAxios.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);

  return { newAxios };
};
