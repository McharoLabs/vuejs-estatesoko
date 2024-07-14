import managerDirector from "../assets/manager_director.jpg";
import chiefMarketing from "../assets/chief_marketing.jpg";
import coordinator from "../assets/coordinator.jpg";
import operation_manager from "../assets/operation_manager.jpg";

const HardCodedData = () => {
  const TEAM = [
    {
      name: "Geofrey S",
      work: "Managing Director",
      comment:
        "Leading the team with a vision to revolutionize the real estate market in Tanzania. Committed to providing exceptional service and innovative solutions.",
      clientImageUrl: managerDirector,
    },
    {
      name: "Romuld Robert",
      work: "Coordinator",
      comment:
        "Ensuring seamless operations and coordination between departments to deliver top-notch services to our clients. Dedicated to efficiency and excellence.",
      clientImageUrl: coordinator,
    },
    {
      name: "Iddy Sultan",
      work: "Chief of Marketing",
      comment:
        "Driving our marketing strategies to reach new heights. Passionate about connecting clients with their dream properties through effective and creative campaigns.",
      clientImageUrl: chiefMarketing,
    },
    {
      name: "Alex Johnson",
      work: "Operation Manager",
      comment:
        "Overseeing daily operations to ensure efficiency and quality. Dedicated to optimizing processes and leading the team towards achieving our goals.",
      clientImageUrl: operation_manager,
    },
  ];

  return { TEAM };
};

export default HardCodedData;
