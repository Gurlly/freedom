import { useState, useEffect } from "react";

import { useForm} from '@formspree/react';

// About Component
const MissionAndVision = () => {
  return (
    <>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Mission:
        </h5>
        <p className="mb-3 text-sm text-justify">
          To honor God, and proclaim Christ.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Vision:
        </h5>
        <p className="text-sm text-justify">
          Church in every barangay in the Philippines.
        </p>
      </div>
    </>
  );
};

const StatementOfFaith = () => {
  return (
    <>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          The Trinity:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          The Bible:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We believe the Bible is the inspired and authoritative Word of God.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Jesus Christ:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We believe in Jesus Christ, who was crucified, died, rose again, and will return.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Salvation:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We believe salvation is by grace through faith in Jesus Christ.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          The Church:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We believe in the universal Church, the body of Christ, and the local church as a community for worship and service.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Christian Living:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We believe in living holy, compassionate lives, loving God and our neighbors.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Eternal Destiny:
        </h5>
        <p className="text-sm text-justify">
          We believe in eternal life with God for believers and eternal separation for the unrepentant.
        </p>
      </div>
    </>
  );
};

const CoreValues = () => {
  return(
    <>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Love:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We value unconditional love, as demonstrated by Jesus Christ. We strive to love God and love our neighbors as ourselves, fostering a community of care and compassion.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Faith:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We are committed to growing in our faith, trusting in God's promises, and seeking His will in all aspects of our lives.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Service:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We believe in serving others with humility and generosity. We are dedicated to making a positive impact in our community and beyond through acts of kindness and service.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Worship:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We value heartfelt worship that honors God and encourages spiritual growth. Our worship is a celebration of God's goodness and a response to His love.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Community:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We prioritize building strong, supportive relationships within our church family. We believe in the importance of fellowship, encouragement, and accountability.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Integrity:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We are committed to living with integrity, honesty, and transparency. We strive to reflect Christ in our actions and decisions.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Discipleship:
        </h5>
        <p className="mb-3 text-sm text-justify">
          We value discipleship and spiritual growth, encouraging one another to become more like Christ through prayer, study, and mentorship.
        </p>
      </div>
      <div className="text-stone-900">
        <h5 className="font-semibold mb-2">
          Outreach:
        </h5>
        <p className="text-sm text-justify">
          We are passionate about sharing the gospel and reaching out to those in need. We aim to be a light in the world, spreading hope and love to all.
        </p>
      </div>
    </>
  )
}

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
      src: "https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/321553548_650741546803726_1500842145677628364_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=osnVgisOGpYQ7kNvgH6AwCO&_nc_ht=scontent.fmnl33-5.fna&oh=00_AYDUPdrFh5iGw2mw2jwrXYkm-ww0yX2zs9guhNTJmr2yKQ&oe=669FABF9",
      active: false,
    },
    {
      title: "Statement of Faith",
      id: "sof",
      content: <StatementOfFaith />,
      src: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/278778908_1711865632483921_425726134701017559_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RkKjO7Adw9cQ7kNvgErOeF4&_nc_ht=scontent.fmnl33-6.fna&oh=00_AYD-HbKYYxivcUG_yYLxEgj0YQdRauZ52Fb4oSBREAe0wg&oe=669FB638",
      active: false,
    },
    {
      title: "Core Values",
      id: "cv",
      content: <CoreValues/>,
      src: "https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/310308627_1836297056707444_6062141197223447268_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jIUWbtebaiYQ7kNvgFWXBWw&_nc_ht=scontent.fmnl33-6.fna&oh=00_AYA3KaAgoYrFROc3ypiwrZRE3hm390MMFn2vCcB3GCLWpQ&oe=669FC368",
      active: false,
    },
    {
      title: "Our Ministries",
      id: "om",
      content: "",
      src: "https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/342707908_2746692112133664_9120053004278895129_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NEYYh1Yq_yQQ7kNvgGX77-G&_nc_ht=scontent.fmnl33-1.fna&oh=00_AYDQXz3_-DH4pTf3SsPuWLzC0r7eMSluuHTsoP939OYinQ&oe=669F9FF8",
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
