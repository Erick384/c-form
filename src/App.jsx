import "./index.css";

function App() {
  return (
    <body className="flex flex-col justify-center items-center bg-green-100 h-screen gap-4">
      <form
        action=""
        className="flex flex-col gap-4 bg-white w-3/5 rounded-xl p-12 shadow-xl"
      >
        <h2 className="font-bold text-lg">Contact Us</h2>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              className="border-2 rounded-lg border-gray-400 p-2"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="firstName">Last Name *</label>
            <input
              type="text"
              className="border-2 rounded-lg border-gray-400 p-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">E-mail Address *</label>
          <input
            type="email"
            className="border-2 rounded-lg border-gray-400 p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="queryType">Query Type *</label>
          <div className="flex gap-4">
            <div className="border-2 rounded-lg border-gray-400 p-2 w-1/2">
              <input type="radio" />
              <span>General Enquiry</span>
            </div>
            <div className="border-2 rounded-lg border-gray-400 p-2 w-1/2">
              <input type="radio" />
              <span>Support Request</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Message *</p>
          <textarea
            name="message"
            rows="5"
            className="border-2 rounded-lg border-gray-500 p-2 w-full"
          ></textarea>
        </div>
        <div className="flex gap-8">
          <input type="checkbox" />
          <p>I consent to being contacted by the team. *</p>
        </div>
        <button
          type="submit"
          className="text-white rounded-lg p-2 w-full bg-green-900 font-bold text-lg"
        >
          Submit
        </button>
      </form>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Erick-384😎</a>.
      </div>
    </body>
  );
}

export default App;
