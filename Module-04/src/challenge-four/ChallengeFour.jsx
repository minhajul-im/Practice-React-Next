import Chat from "./Chat";
import ContactList from "./ContactList";
import { useReducer } from "./MyReaact";
import { messengerReducer, initialState } from "./messengerReducer";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Sarah", email: "sarah@mail.com" },
];

export default function ChallengeFour() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];

  console.log(state.selectedId);

  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
      <ContactList contacts={contacts} dispatch={dispatch} />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}
