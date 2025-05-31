import { useForm, ValidationError } from "@formspree/react";

export default function MailForm() {
  const [state, handleSubmit] = useForm("xblovaek");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="font-bold">
        Email Address
      </label>
      <input
        className="p-4 mb-4 border-2 border-black border-dashed rounded-md"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="p-4 mb-4 border-2 border-black border-dashed rounded-md"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
