import { SocialLinks } from "../Users";

const Social = () => {
  const socialIcons = SocialLinks.map((SocialLinks, index) => {
    return (
      <a
        key={index}
        href={`${SocialLinks.link}`}
        target="_blank"
        className="font-mono  text-lg hover:text-[#9F6BA0] hover:-translate-x-1 transition transform duration-300 ease-in-out"
      >
        <div data-aos="fade-up-left" data-aos-duration="800">
          {" "}
          <SocialLinks.icon stroke={2} className="-rotate-90 " size={25} />
        </div>
      </a>
    );
  });

  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-8  fixed bottom-32 -left-40 rotate-90 ">
      {socialIcons}
      <hr className="border w-40 rounded-full border-[#9F6BA0]" />
    </div>
  );
};
export default Social;
