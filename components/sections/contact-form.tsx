export function ContactForm() {
  return (
    <div className="lg:w-[480px] mt-5 lg:ml-12">
      <div className="bg-white p-2 text-center">
        <p className="red-color medium-font font-light mb-1">
          REGISTER NOW!
        </p>
        <p className="medium-font font-semibold mb-1">
          SEAL YOUR SPOT FOR SUCCESS
        </p>
        <p className="red-color medium-font font-bold m-0">
          ADMISSION OPEN FOR 2025
        </p>
      </div>
      <div className="bg-blue-color px-3 py-2">
        <input
          className="rounded py-1 px-2 smaller-font w-full mb-2"
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="rounded  py-1 px-2 smaller-font w-full mb-2"
          type="email"
          placeholder="Enter Email Address"
        />
        <input
          className="rounded  py-1 px-2 smaller-font w-full mb-2"
          type="number"
          placeholder="Enter Mobile Number"
        />
        <input
          className="rounded  py-1 px-2 smaller-font w-full mb-2"
          type="text"
          placeholder="Enter OTP"
        />
        <div className="grid md:grid-cols-2 gap-2 mb-2">
          <div>
            <select
              className="rounded  py-1 px-2 smaller-font w-full"
              name="cars"
              id="cars"
            >
              <option value="volvo">Select State</option>
              <option value="saab">Tamilnadu</option>
              <option value="mercedes">Uttar Pradesh</option>
              <option value="audi">Gujrat</option>
            </select>
          </div>
          <div>
            <select
              className="rounded  py-1 px-2 smaller-font w-full"
              name="cars"
              id="cars"
            >
              <option value="volvo">Select City</option>
              <option value="saab">Tamilnadu</option>
              <option value="mercedes">Uttar Pradesh</option>
              <option value="audi">Gujrat</option>
            </select>
          </div>
        </div>
        <select className="rounded py-1 px-2 smaller-font w-full" name="cars" id="cars">
          <option value="volvo">Select Programme</option>
          <option value="saab">
            BA/BA (Hons) in Hospitality and Service Management
          </option>
          <option value="mercedes">MBA in Energy Management</option>
          <option value="audi">BBA Aviation Management</option>
        </select>
        <div className="flex gap-4 my-5">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label htmlFor="vehicle1" className="text-white text-xs">
            I agree to receive information regarding my submitted
            enquiry on Academic.
          </label>
        </div>
        <button className="bg-red-color-wo-hover rounded w-full text-white py-1 mb-2 smaller-font">
          Submit
        </button>
      </div>
      <div className="h-6  w-full bg-white"></div>
    </div>
  )
}

