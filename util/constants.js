import { useEffect, useState } from "react";

export const BASE_URL = "https://khubaib-backend.abdullahrazzaki.com";
export const API_URL = `${BASE_URL}/api/public`;
// process.env.NODE_ENV === "development"
//   ? "http://localhost:3012/api/public"
//   : "https://khubaib-backend.abdullahrazzaki.com/api/public";

const isSomething = (value) =>
  value !== undefined && value !== null && value !== "";
export const getData = (data, passAll = false) => {
  const body = new FormData();
  for (const key in data) {
    if (passAll || isSomething(data[key]))
      body.append(
        key,
        typeof data[key] === "object" && !(data[key] instanceof File)
          ? JSON.stringify(data[key])
          : data[key]
      );
  }
  return body;
};
export const useInfo = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch(`${API_URL}/v1/info`)
      .then((res) => res.json())
      .then((res) => {
        setInfo(res);
      });
  }, []);
  return info;
};
