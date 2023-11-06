import { toast } from "react-toastify";

const ReviewSection = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
            <h1 className="text-5xl font-extrabold dark:text-gray-50">
              Subscribe to Our Newsletter
            </h1>
            <p className="my-8">
              Stay updated with the latest news, updates, and offers.
            </p>
            <form className="self-stretch space-y-3">
              <div>
                <label htmlFor="email" className="text-sm sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md focus:ring focus:ring-indigo-400 dark:border-gray-700"
                />
              </div>
              <button
                type="button"
                onClick={() => toast.success("Thank you For Subscribe")}
                className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
