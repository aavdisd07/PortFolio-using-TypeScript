import { IconBrandGithub, IconBrandHackerrank, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";

const Social = () => {
  const SocialLinks = [
    { link: "https://github.com/aavdisd07", icon: IconBrandGithub },
    { link: "https://www.hackerrank.com/profile/2021bit153", icon: IconBrandHackerrank },
    { link: "https://leetcode.com/u/2021bit153/", icon: IconBrandLeetcode},
    { link: "https://www.linkedin.com/in/avantikadeshmukh/", icon: IconBrandLinkedin },
  ];

  const SocialIcons = SocialLinks.map((SocialLinks) => {
    return (
      <a
        href={`${SocialLinks.link}`} target="_blank"
        className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        < SocialLinks.icon className="-rotate-90" size={30} />
      </a>
    );
  });

  return (
    <div className="fixed bottom-40 -left-40 transform -translate-y-1/2 rotate-90 flex items-center text-textColor gap-10">
    {SocialIcons}
     <hr className="border-2 w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Social;
