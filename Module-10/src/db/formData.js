import { getID } from "./links";

export const init = {
  name: {
    id: getID.next().value,
    label: "What is your name?",
    type: "text",
    value: "",
    placeholder: "Please provide your name....",
  },

  email: {
    id: getID.next().value,
    label: "What is your email?",
    type: "email",
    value: "",
    placeholder: "Please provide your email....",
  },
  number: {
    id: getID.next().value,
    label: "What is your phone number?",
    type: "number",
    value: "",
    placeholder: "Please provide your phone number....",
  },
};
