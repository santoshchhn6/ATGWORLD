import user1 from "./assets/images/users/user1.png";
import user2 from "./assets/images/users/user2.png";
import user3 from "./assets/images/users/user3.png";
import user4 from "./assets/images/users/user4.png";

import forest from "./assets/images/post/forest.png";
import door from "./assets/images/post/door.png";
import car from "./assets/images/post/car.png";

export const posts = [
  {
    id: 1,
    type: "Article",
    img: forest,
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    user: { name: "Sarthak Kamra", img: user1 },
    views: "1.4k",
  },
  {
    id: 2,
    type: "Education",
    img: door,
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    user: { name: "Sarah West", img: user2 },
    views: "1.4k",
  },
  {
    id: 3,
    type: "Meetup",
    img: car,
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    user: { name: "Ronal Jones", img: user3 },
    views: "1.4k",
    location: "Ahmedabad, India",
    date: "Fri, 12 Oct, 2018",
    website: { title: "Visit Website", url: "" },
  },
  {
    id: 4,
    type: "Job",
    title: "Software Developer",
    user: { name: "Joseph Gray", img: user4 },
    views: "1.4k",
    location: "Noida, India",
    company: "Innovaccer Analytics Private Ltd.",
    website: { title: "Apply on Timesjobs", url: "" },
  },
];
