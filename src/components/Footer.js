import React from 'react';

const footerLinks = [
  { name: 'Link 1', href: '/' },
  { name: 'Link 2', href: '/' },
  { name: 'Link 3', href: '/' },
];

const industriesLinks = [
  { name: 'Link 4', href: '/' },
  { name: 'Link 5', href: '/' },
  { name: 'Link 6', href: '/' },
];

const socialIcons = [
  { src: 'https://www.svgrepo.com/show/303114/facebook-3-logo.svg', alt: 'Facebook', href: 'https://www.facebook.com/asylhan.ukenov.5/'},
  { src: 'https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg', alt: 'Instagram', href: 'https://www.instagram.com/asylhanuk/' },
  { src: 'https://www.svgrepo.com/show/94698/github.svg', alt: 'GitHub', href: 'https://github.com/ukenov' },
  { src: 'https://www.svgrepo.com/show/28145/linkedin.svg', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/asylhan-ukenov-477a63185/' },
];

export default function Footer() {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe our newsletter to get an update.
            </h1>
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Something else</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Something</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              {industriesLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt="Google Play"
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt="App Store"
            />
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            {socialIcons.map((icon) => (
              <a key={icon.alt} href={icon.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <img src={icon.src} width="30" height="30" alt={icon.alt} />
              </a>
            ))}
          </div>
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
          © 2024 Ukenov. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
