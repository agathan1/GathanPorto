import { useForm, ValidationError } from "@formspree/react";
import { Card } from "../ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

interface FormInput {
  [key: string]: string;
  email: string,
  username: string,
  message: string
}
export default function FormContact() {
  // const [isForm, setIsForm] = useState<FormInput>({
  //   email: "",
  //   username: "",
  //   message: "",
  // });
    const [state, handleSubmit] = useForm("xblovaek");

  // console.log("form contact", formContact);
  return (
    <Card className=" p-8 border-black border-2 bg-[#bdd5ea]/30 shadow-[8px_8px_0px_black] rounded-none">
      <form onSubmit={handleSubmit}>
        {["email", "username", "message"].map((field, index) => (
          <div className="space-y-2">
            <Label htmlFor={field} className="mb-4">
              {field === "email"
                ? "Email"
                : field === "username"
                ? "Username"
                : "Message"}
            </Label>
            <Input
              id={field}
              type={field === "email" ? "email" : "text"}
              // value={isForm[field as keyof FormInput]}
              name={field}
              className=" mb-4 border-2 border-black bg-[#bdd5ea]/30 shadow-[3px_5px_0px_black] focus-visible:shadow-none  focus-visible:border-black focus-visible:outline-offset-2 focus-visible:outline-black  focus-visible:ring-shadow focus-visible:ring-[3px] focus-visible:ring-offset-[3px] focus-visible:ring-offset-[#bdd5ea]/98"
            />
        <ValidationError prefix={field} field={field} errors={state.errors} />
          </div>
        ))}
        <Button type="submit" disabled={state.submitting}>Send</Button>
      </form>
      {/* <TsIcon/> */}
    </Card>
  );
}
