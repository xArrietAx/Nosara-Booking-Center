import { MdFacebook, MdWhatsapp, MdOutlineEmail } from "@/icons/index";

const socials = [
    {
      title: "Facebook",
      icon: "MdFacebook",
      url: "https://www.facebook.com/profile.php?id=61557653082047"
    },
    {
      title: "WhatsApp",
      icon: "MdWhatsapp",
      url: "https://wa.me/50686012266?text=Hello Nosara Booking Center."
    },
    {
      title: "Email",
      icon: "MdOutlineEmail",
      url: "mailto:nbc@nosarabookingcenter.com"
    }
]

export const SocialsList = ({ className = "lg:flex-col lg:items-start lg:gap-5" }) => {

  const renderItem = (item, index) => {

    const Icons = {
      "MdFacebook": <MdFacebook className="group-hover:text-[#1877F2]" />,
      "MdWhatsapp": <MdWhatsapp className="group-hover:text-primary" />,
      "MdOutlineEmail": <MdOutlineEmail className="group-hover:text-[#D14836]" />
    }

    return (
      <a href={item.url} target="_blank" className="flex items-center gap-1 text-2xl leading-none group hover:text-dark" key={index}>
        {Icons[item.icon]}
        <span className="text-sm">{item.title}</span>
      </a>
    );
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map(renderItem)}
    </div>
  );
};
