import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-neutral-100 text-black dark:bg-black dark:text-gray-400 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-bold text-xl text-black dark:text-white">
            About us
          </h2>
          <p className="mt-4">
            We are a dedicated team of music educators and enthusiasts committed
            to providing high-quality music education for all levels. Whether
            you're just starting out or looking to refine your skills, our
            courses are designed to help you reach your full potential.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl text-black dark:text-white">
            Contact us
          </h2>
          <p className="mt-4">
            Have questions or need assistance? We're here to help!
          </p>
          <ul>
            <li>Email: support@yourmusicwebsite.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Music Lane, Suite 100, Your City, Your Country</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl text-black dark:text-white">
            Follow us
          </h2>
          <p className="mt-4">
            Stay connected and follow us on social media for the latest updates,
            news, and exclusive content!
          </p>
          <ul>
            <li>
              <Link href={"/"}>Facebook</Link>
            </li>
            <li>
              <Link href={"/"}>Twitter</Link>
            </li>
            <li>
              <Link href={"/"}>Instagram</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl text-black dark:text-white">
            Newsletter
          </h2>
          <p className="mt-4">
            Subscribe to our newsletter and stay updated with the latest
            courses, webinars, and special offers.
          </p>
          <Link href={"/"}>Subscribe Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
