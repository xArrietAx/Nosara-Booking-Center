import { MdFacebook, MdWhatsapp, MdOutlineEmail } from "@/utils/Icons";

export const SocialsList = ({className = "lg:flex-col lg:items-start lg:gap-5"}) => {

    const socials = [
      { name: "Facebook", icon: <MdFacebook />, href: "https://www.facebook.com/profile.php?id=61557653082047" },
      { name: "WhatsApp", icon: <MdWhatsapp />, href: "https://wa.me/50686012266?text=Hello, Nosara Booking Center. I need..." },
      { name: "Email", icon: <MdOutlineEmail />, href: "mailto:nbc@nosarabookingcenter.com" },
    ];
  
    const renderItem = (item, index) => {
      return (
        <a
          href={item.href}
          target="_blank"
          className="flex items-center gap-1 text-2xl text-gray-700 hover:text-black leading-none  group"
          key={index}
        >
          {item.icon}
          <span className="text-sm">{item.name}</span>
        </a>
      );
    };
  
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {socials.map(renderItem)}
      </div>
    );
  };