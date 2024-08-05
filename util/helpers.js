import DOMPurify from "dompurify";

export const sanitizedData = (data) => ({
  __html: DOMPurify.sanitize(data),
});

export const splitIntoTwo = (content = [], limiter = "") => {
  const splitContent = content.split(limiter);
  const firstHalf = splitContent.slice(0, Math.floor(splitContent.length / 2));
  const secondHalf = splitContent.slice(Math.floor(splitContent.length / 2));
  return [firstHalf, secondHalf];
};
