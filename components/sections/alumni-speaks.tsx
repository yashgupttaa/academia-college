export function AlumniSpeaks() {
  return (
    <section className="bg-red-color-wo-hover">
      <div className="container md:py-[5rem] md:px-[4rem] px-5 mx-auto">
        <p className="text-white font-bold text-4xl py-5">Alumni Speaks</p>
        <div className="flex md-flex">
          <div className="md:w-[900px] border-right">
            <span className="text-5xl font-extrabold text-white">"</span>
            <p className="text-white font-semibold text-lg pr-[2rem]">
              IILM University’s MBA programme was truly transformative. The faculty’s real-world insights made learning highly practical and relevant.
              Personalised mentoring and career support aligned my goals with industry needs, while the vibrant campus life and networking
              opportunities enriched the experience. IILM equips you with the skills to thrive in the corporate world.
            </p>
          </div>
          <div className="flex md-flex gap-5 md:pl-[2rem] pb-5">
            <img src="/guru.webp" className='guru-image' alt="" />
            <div>
              <p className="text-white text-2xl font-bold">Gurtej Chawal</p>
              <small className="text-white pb-4">Associate Vice President</small>
              <p className="text-white text-2xl font-bold">MBA 2006-08</p>
              <small className="text-white">Xceedance Consulting</small>
              <small className="text-white">Private Limited</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

