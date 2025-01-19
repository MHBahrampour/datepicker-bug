import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { DatePicker } from "@heroui/date-picker";
import { Input } from "@heroui/input";

export default function Home() {
  return (
    <section className="max-w-sm grid gap-4">
      <DatePicker label="Birth date" />
      <Input label="Full Name" />
      <Checkbox defaultSelected>
        I agree to terms and conditions blindly.
      </Checkbox>
      <Button>Submit</Button>
    </section>
  );
}
