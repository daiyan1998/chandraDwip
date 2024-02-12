import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Form = () => {
  return (
    <div>
      <form className="flex flex-col gap-9 p-6">
        <div className="flex gap-4">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <Input placeholder="E-mail Address" className="col-span-2" />
        <Input placeholder="Phone Number" />
        <Textarea placeholder="Message" />
        <Button className="px-12 mx-auto">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
