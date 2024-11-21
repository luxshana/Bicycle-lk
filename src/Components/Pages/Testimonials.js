

const Testimonials = () => {
  const testimonials = [
    {
      user: "Anna Johnson",
      company: "Adventure Seekers Inc.",
      text: "The lightweight frame and smooth gear system make every ride an absolute pleasure. Our team loves using these bicycles for weekend retreats!",
    },
    {
      user: "Liam Carter",
      company: "Liam Carter Horizon Technologies",
      text: "These bikes are the perfect combination of performance and sustainability. Our customers rave about their style and durability!",
    },
    {
      user: "David Johnson",
      company: "Quantum Innovations",
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
      user: "Michael Taylor",
      company: "Urban Commute Solutions",
      text: "For city rides, these bicycles are unbeatable. Sleek, efficient, and environmentally friendly – they’ve transformed our team's daily commutes.",
    },
    {
      user: "Emily Rogers ",
      company: "Trail Blazers Ltd.",
      text: "Our company organizes adventure tours, and these bicycles are our top choice. The all-terrain performance has never let us down!",
    },
    {
      user: "Emily DaviDavid Wilson",
      company: " Green Pathways Initiative",
      text: "We promote eco-friendly transportation, and these bikes perfectly align with our mission. They’re stylish, reliable, and a joy to ride.",
    },
  ];
  return (
    <div
      id="testimonials"
      className="mt-20 tracking-wide "
      >
      <div className=" text-center lg:text-left mb-8 lg:mb-0 ">
        <h1 className="text-center my-10 lg:my-20 relative inline-block uppercase font-bold text-2xl sm:text-3xl">
          What People are saying
          <span className="absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[2px] w-[60px]"></span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
            <div className="rounded-md text-md bg-slate-50">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
