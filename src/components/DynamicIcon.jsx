import { PiBicycleLight, PiAirplaneTiltLight } from "react-icons/pi";
import { FaShuttleVan, FaHorse } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { GiFishingBoat } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";
import { Atv } from "@/Icons/Atv";
import { GolfCart } from "@/Icons/GolfCart";
import {Massage } from "@/Icons/Massage";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa6";

export const DynamicIcon = ({iconName}) => {

    const iconsMap = {
        PiBicycleLight: <PiBicycleLight fontSize="40px" color="white" />,
        PiAirplaneTiltLight: <PiAirplaneTiltLight fontSize="40px" color="white" />,
        FaShuttleVan: <FaShuttleVan fontSize="40px" color="white" />,
        FaHorse: <FaHorse fontSize="40px" color="white" />,
        GrYoga: <GrYoga fontSize="40px" color="white" />,
        GiFishingBoat: <GiFishingBoat fontSize="40px" color="white" />,
        LuChefHat: <LuChefHat fontSize="40px" color="white" />,
        Atv: <Atv fill="white" />,
        GolfCart: <GolfCart fill="white" />,
        Massage: <Massage fill="white" />,
        AiOutlineShoppingCart:<AiOutlineShoppingCart fontSize="40px" color="white" />,
        FaCarSide: <FaCarSide fontSize="40px" color="white" />
    };

  return iconsMap[iconName];
  
}