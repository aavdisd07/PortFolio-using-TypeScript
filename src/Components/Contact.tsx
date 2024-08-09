import React, { useState } from 'react';
import Floating_input from './Floting_input';
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formData, setFormData] = useState(form);

  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="px-16 mx-20 my-10 mb-28 font-mono" id="Contact">
      <h1 className="text-4xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>
      <div className='border-primaryColor m-auto flex flex-col gap-6 p-8 rounded-3xl border w-[70%] shadow-[0_0_10px_0_#64FFDA50]'>
        <div className='text-3xl text-white font-semibold'>
          Let's Connect
        </div>
        <Floating_input id="name" name="Name" value={formData.name} handleChange={handleChange} />
        <Floating_input id="email" name="Email" value={formData.email} handleChange={handleChange} />
        <Floating_input id="phone" name="Mobile Number" value={formData.phone} handleChange={handleChange} />
        <Floating_input id="message" name="Message" value={formData.message} handleChange={handleChange} />
        <Button fullWidth variant="filled" color="#64FFDA"  className="!text-bgColor !font-bold !text-2xl" rightSection={<IconArrowRight size={14} />} size="lg" radius="lg">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
