import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="flex flex-col items-center text-center mt-10 flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay accountable while attaining
          <br className="hidden md:block" /> financial freedom
        </h1>
        <p className="text-gray-600 text-lg mb-6 max-w-xl">
          Savey is designed to help families and individuals build a financial
          freedom through{" "}
          <span className="font-semibold text-gray-800">Budgeting</span>
        </p>

        <div className="flex space-x-4 mb-10">
          <img src="/appstore.png" alt="App Store" className="h-12" />
          <img src="/googleplay.png" alt="Google Play" className="h-12" />
        </div>

        <div className="flex justify-center space-x-6 mt-2">
          <img src="/phone.png" alt="App1" className="h-80 drop-shadow-xl" />
        </div>
      </main>

      <section className="w-full py-16 bg-gradient-to-r from-green-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center px-6 md:px-0">
          <img
            src="/phone 2.png"
            alt="phone2"
            className="h-96 drop-shadow-2xl mb-8 md:mb-0 md:mr-12"
          />
          <div className="flex-1 text-left">
            <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              Budgeting
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {" "}
              Budgeting made
              <br /> simple
            </h2>
            <p className="text-gray-600 mb-6">
              With Savey, you can effortlessly plan and allocate money for both
              spending (such as on food and transportation) and saving (such as
              on rent and other expenses). We'll strive to assign the
              appropriate sums into a separate Bills account using our
              AI-enabled platform. You can spend money in this way without
              second-guessing yourself.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold shadow">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-gradient-to-r from-green-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">
          <img
            src="/phone3.png"
            alt="phone3"
            className="h-96 drop-shadow-2xl mb-8 md:mb-0 md:mr-12"
          />
          <div className="flex-1 text-left">
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              Smart
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Smart tools for smart
              <br /> spending
            </h2>
            <p className="text-gray-600 mb-6">
              Savey offers several simple bill-paying options, including one
              that is extensively used. Using your wallet account, a QR code,
              USSD, bank transfer, or a card issued. To determine how much
              should always be available for spending, we leverage AI and
              industry best practices. Based on your deposits, what you owe, and
              long-term planning with your budgeting tool.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold shadow">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center px-6 md:px-0">
          <img
            src="/phone4.png"
            alt="Saving "
            className="h-96 drop-shadow-2xl mb-8 md:mb-0 md:ml-12"
          />
          <div className="flex-1 text-left">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              Saving
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Manage your money
              <br /> like a pro
            </h2>
            <p className="text-gray-600 mb-6">
              By establishing several saving goals, Savey manages your money in
              a way that you won't even notice until you meet your savings
              objectives (fixed and rainy season goals). You may accomplish this
              using our model without going broke. We came to understand that
              good money management requires discipline. With the help of our
              AI-enabled platform, we work the magic especially for you. We only
              handle it for you; that is all we do by growing it with interest.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold shadow">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gradient-to-r from-green-50 via-white to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Coming soon
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We have made financial goals easy by building our all-in-one
            powerful tool needed to stay smart in money management .
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src="/investing.png" alt="Investing" className="h-50 mb-5" />
              <h3 className="font-semibold text-lg mb-2">Investing</h3>
              <p className="text-gray-600 text-center text-sm">
                Invest into both local and global investment
                <br /> scheme to grow your money
              </p>
            </div>

            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src="/loan.png" alt="Loan" className="h-50 mb-5" />
              <h3 className="font-semibold text-lg mb-2">Loan</h3>
              <p className="text-gray-600 text-center text-sm">
                Get emergency loans to cover up for you
                <br /> savings and spendings
              </p>
            </div>

            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src="/insurance.png" alt="Insurance" className="h-50 mb-5" />
              <h3 className="font-semibold text-lg mb-2">Insurance</h3>
              <p className="text-gray-600 text-center text-sm">
                Secure all that you have including your health and
                <br /> with our personal insurance scheme
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Top Core Values From Savey
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A belief in providing financial services that foster trust and an
            extensive ecosystem, regardless of their financial education
            background.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex-1 bg-white rounded-xl shadow p-8 flex flex-col items-center">
              <img src="/rectangle.png" alt="rectangle" className="h-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Transparency</h3>
              <p className="text-gray-600 text-center text-sm">
                A commitment to providing clear and transparent information
                about fees, rates, and other financial details.
              </p>
            </div>

            <div className="flex-1 bg-white rounded-xl shadow p-8 flex flex-col items-center">
              <img src="/key.png" alt="key" className="h-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secured Payment</h3>
              <p className="text-gray-600 text-center text-sm">
                A dedication to protect customer' personal and fainancial
                information with robust security measures
              </p>
            </div>

            <div className="flex-1 bg-white rounded-xl shadow p-8 flex flex-col items-center">
              <img src="/money.png" alt="money" className="h-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Financial responsibility
              </h3>
              <p className="text-gray-600 text-center text-sm">
                commitment to promoting responsible spending and saving habits
                among customers.
              </p>
            </div>
          </div>
          {/* <div className="flex space-x-3 mt-2">
            <a href="#">
              <img src="/facebook.png" alt="Facebook" className="h-6" />
            </a>
            <a href="#">
              <img src="/twitter.png" alt="Twitter" className="h-6" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="Instagram" className="h-6" />
            </a>
            <a href="#">
              <img src="/whatsapp.png" alt="WhatsApp" className="h-6" />
            </a>
          </div> */}
        </div>
      </section>

      <section className="w-full bg-gray-900 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Let's make moves together
          </h2>
          <p className="text-gray-300 mb-6 text-sm">
            Stay up-to-date with our latest news and insights - subscribe to our
            newsletter today!
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded w-full sm:w-auto focus:outline-none bg-white"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold shadow"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
