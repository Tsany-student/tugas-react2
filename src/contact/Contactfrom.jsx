import { useImmer } from "use-immer";

export default function ContactForm() {
  const [contact, setContact] = useImmer({
    name: "",
    message: ""
  });

  function handleNameChange(e) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={contact.name}
        onChange={handleNameChange}
      />

      <br />

      <input
        type="text"
        placeholder="Message"
        value={contact.message}
        onChange={handleMessageChange}
      />
    </div>
  );
}
