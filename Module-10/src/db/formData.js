import { getID } from "./links";

export const init = {
  fName: {
    id: getID.next().value,
    label: "What is your first name?",
    type: "text",
    value: "",
    placeholder: "Please provide your first name....",
  },
  lName: {
    id: getID.next().value,
    label: "What is your last name?",
    type: "text",
    value: "",
    placeholder: "Please provide your last name....",
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
