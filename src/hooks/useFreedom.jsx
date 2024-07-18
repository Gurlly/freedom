import { useState, useEffect } from "react";

import { useForm} from '@formspree/react';

// About Component
const MissionAndVision = () => {
  return (
    <>
      <ul>
        <li className="mb-3">
          <p className="text-justify">
            <span className="font-semibold text-stone-800">Mission:</span> Lorem
            ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </li>
        <li>
          <p className="text-justify">
            <span className="font-semibold text-stone-800">Vision:</span> Ut
            iste tenetur esse, ab suscipit dolorum culpa neque ratione accusamus
            eligendi corporis, illo non consequatur.
          </p>
        </li>
      </ul>
    </>
  );
};

const StatementOfFaith = () => {
  return (
    <>
      <ul>
        <li className="mb-3">
          <p className="text-justify">
            <span className="font-semibold text-stone-800">Mission:</span> Lorem
            ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </li>
        <li>
          <p className="text-justify">
            <span className="font-semibold text-stone-800">Vision:</span> Ut
            iste tenetur esse, ab suscipit dolorum culpa neque ratione accusamus
            eligendi corporis, illo non consequatur.
          </p>
        </li>
      </ul>
    </>
  );
};

// Contact Component
const locations = [
    {
        name: "Pateros",
        id: "pateros",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.213656742038!2d121.07605746097586!3d14.546820689441631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c983fe270339%3A0x3f255f02c096e5cf!2sFreedom%20Christian%20Fellowship!5e0!3m2!1sen!2sph!4v1721008223760!5m2!1sen!2sph",
        address: "1 Capt. Musni St. Sta. Ana, Pateros",
        tel: "9969347564"
    },
    {
        name: "Taguig",
        id: "taguig",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.3920273086892!2d121.0565922350438!3d14.526403019864421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c964b42fd051%3A0x1a880af2784171af!2sOld%20Fisher%20Valley%20School!5e0!3m2!1sen!2sph!4v1721009631407!5m2!1sen!2sph",
        address: "B51, L11 B51, Taguig, 1639 Metro Manila",
        tel: "9969347564"
    },
    {
        name: "North Caloocan",
        id: "caloocan",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.2076959982614!2d121.03382213490191!3d14.746401032121813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b04ac6dc2085%3A0xd6059cfc01b55278!2sFreedom%20Christian%20Fellowship%20North%20Caloocan!5e0!3m2!1sen!2sph!4v1721009213003!5m2!1sen!2sph",
        address: "P2WM+GR6, Congressional Rd Ext, Extension, Caloocan, Metro Manila",
        tel: "(02)77560913"
    }
]

export default function useFreedom() {

  const [accordionItems, setAccordionItems] = useState([
    {
      title: "Mission and Vision",
      id: "mv",
      content: <MissionAndVision />,
      src: "https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/438804775_2221294444874368_6198002353763725479_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=On60k4LpodIQ7kNvgHdIMJs&_nc_ht=scontent.fmnl33-1.fna&oh=00_AYDtVOtnnud8XOzfQHD97rGH-_yXGbJ9IuqKH3LIxEd7gA&oe=669E8775",
      active: false,
    },
    {
      title: "Statement of Faith",
      id: "sof",
      content: <StatementOfFaith />,
      src: "https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/434148953_2206646576339155_8500095676298051358_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ezRHKHY5SL0Q7kNvgF284n7&_nc_ht=scontent.fcrk3-3.fna&oh=00_AYC2WMasedmK_DweGS84lnI03u6vZYd0XXvP3wBFIj_nVw&oe=6698133B",
      active: false,
    },
    {
      title: "Core Values",
      id: "cv",
      content: "",
      src: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/419896325_2157316044605542_7010210353471705348_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XmkIcx4eLcYQ7kNvgHgnJ1y&_nc_ht=scontent.fcrk3-2.fna&oh=00_AYD9PXASljmAwyzipsp_I93RwvLgFhC437FgOBwa7ZxMlA&oe=66980A12",
      active: false,
    },
    {
      title: "Our Ministries",
      id: "om",
      content: "",
      src: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/417819090_2152079115129235_5317915930658846315_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4wQU3wQe1pUQ7kNvgGB7GId&_nc_ht=scontent.fcrk3-2.fna&oh=00_AYAK87lEzNRpDRSPsLG6uBaIjH5rI8ZrsH5I9HTehp0QaA&oe=66981910",
      active: false,
    },
  ]);

  const changeActiveItem = (id) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const [state, handleSubmit] = useForm("mnnanzbd");

    const changeLocation = (locID) => {
        const selectedLocation = locations.find(loc => loc.id === locID);
        if (selectedLocation) {
            setFade(false); // Trigger fade-out
            setTimeout(() => {
                setLocation(selectedLocation);
                setFade(true); // Trigger fade-in
            }, 500); // Adjust timeout to match your CSS transition duration
        }
    }

    const [location, setLocation] = useState(locations[0]);

    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, [])

  return {
    accordionItems,
    changeActiveItem,
    locations,
    location,
    fade,
    state,
    handleSubmit,
    changeLocation
  };
}
