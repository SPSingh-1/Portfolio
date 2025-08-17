import React from "react";

const Hero = () => {
  return (
    <section className="Hcontainer">
      <div className="Hcontent">
        <h1 className="Htitle transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:opacity-90">Hii, I'm Shashi Pratap Singh</h1>
        <p className="Hdescription">
        I'm a Full-Stack Developer with 1 year of hands-on experience working with React, Node.js, and various supporting frameworks. I'm passionate about building scalable and efficient web applications. Feel free to reach out if you'd like to connect or learn more about my work!
        </p>
        <a
  href="mailto:spsrajjput@gmail.com"
  className="HcontactBtn transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-blue-600 hover:text-white "
>
  Contact Me
</a>

      </div>
      <img 
        src="/hero.jpeg" 
        alt="My Portfolio" 
        className="w-30% h-auto max-h-[400px] object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-400 hero"
      />

    </section>
  );
};

export default Hero;
