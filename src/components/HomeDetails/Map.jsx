import React from "react";

const Map = () => {
  return (
    <div className="md:m-10 m-3">
      <div className="flex gap-4 justify-center">
        <p className="text-[12px] md:text-lg font-semibold mb-5 text-nowrap uppercase">
          NEIGHBOURHOOD
        </p>
      </div>

      <p className="text-center md:mb-10  mb-7 text-[12px] md:text-lg text-gray-500">
        Spectacular views, smart homes, modular kitchen and a 3,000+ ft2
        Wellness Centre – all these have one address: Godrej Meadows 2. A place
        that cares about your health above all else. Here, we promise to keep
        you healthy in more ways than one like fresh air, gardens, Health
        Circuit for walking, Hydrotherapy Beds and Aqua Gym, Meditation Room,
        Interactive Squash Court, and Keto Café. Here, Nature promises the best
        of Life, along with the best of Health.
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120976.60597935974!2d73.7921444!3d18.640695150000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8377fbdeab3%3A0x2c4265dab1a7a0f8!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708599506283!5m2!1sen!2sin"
        className="w-full"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="My Map"
      />
    </div>
  );
};

export default Map;
