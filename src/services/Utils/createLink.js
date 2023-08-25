import { email, phonenumber } from "./regex";

const createLink = (link) => {
  if (email.test(link)) return "mailto:" + link;
  if (phonenumber.test(link)) return "tel:" + link;
};

export default createLink;
