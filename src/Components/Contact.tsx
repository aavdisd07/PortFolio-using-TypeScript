import React, { useState } from "react";
import Floating_input from "./Floting_input";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconHandLoveYou } from "@tabler/icons-react";
import { validateForm } from "./Validation";
// import { db } from '../Firebase';
import toast from "react-hot-toast";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);

  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
    setFormError({ ...formError, [id]: validateForm(id, value) });
  };

  const handleSubmit = async () => {
    let valid = true;
    let newFormError: { [key: string]: string } = {};
    for (let key in formData) {
      const error = validateForm(key, formData[key]);
      if (error.length > 0) {
        newFormError[key] = error;
        valid = false;
      }
    }
    setFormError(newFormError);
    if (valid) {
      setFormData(form);
      toast.success("Submitted Successfully!", { duration: 4000 });
      // console.alert("submitted succesfully");
      await addDoc(collection(db, "portfolio"), formData);
    } else {
      toast.error("Some error occurred!", { duration: 4000 });
    }
  };

  const btn = useMatches({
    xsm: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <div
      className="px-16 mx-20 my-10 md-mx:px-8 sm-mx:px-4 lg-mx:mx-10 md-mx:mx-0 font-mono"
      id="Contact"
    >
      <h1 className="text-4xl mb-10 font-bold sm-mx:text-3xl xs-mx:text-2xl text-center text-white">
        <span className="text-[#9F6BA0]">04.&nbsp;</span>Contact
      </h1>
      <div
        data-aos="flip-down"
        data-aos-duration="3000"
        className="border-primaryColor m-auto flex flex-col sm-mx:p-4 gap-6 p-8 rounded-3xl border w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50]"
      >
        <div className="text-3xl text-white font-semibold flex gap-3 sm-mx:text-2xl xs-mx:text-xl">
          Let's Connect{" "}
          <span>
            <IconHandLoveYou
              className="w-9 h-9 sm-mx:w-7 sm-mx:h-7"
              color="white"
            />
          </span>
        </div>
        <Floating_input
          id="name"
          name="Name"
          value={formData.name}
          handleChange={handleChange}
          error={formError.name}
        />
        <Floating_input
          id="email"
          name="Email"
          value={formData.email}
          handleChange={handleChange}
          error={formError.email}
        />
        <Floating_input
          id="phone"
          name="Mobile Number"
          value={formData.phone}
          handleChange={handleChange}
          error={formError.phone}
        />
        <Floating_input
          id="message"
          name="Message"
          value={formData.message}
          handleChange={handleChange}
          error={formError.message}
        />
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="filled"
          color="#9F6BA0"
          className="!text-bgColor !font-bold"
          rightSection={<IconArrowRight size={14} />}
          size={btn}
          radius="lg"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
