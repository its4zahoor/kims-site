export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3012/api/public"
    : "https://khubaib-backend.abdullahrazzaki.com/api/public";
