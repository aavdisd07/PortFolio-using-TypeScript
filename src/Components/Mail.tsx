const Mail = () => {
  return (
    <div className="fixed bottom-1/2 -right-40  transform -translate-y-1/2 rotate-90 tracking-widest flex items-center text-textColor gap-2">
      <a
        href="mailto:2021bit153@sggs.ac.in"
        className="font-mono text-lg hover:text-primaryColor   hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        2021BIT153@sggs.ac.in
      </a>
      <hr className="border-2 w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Mail;
