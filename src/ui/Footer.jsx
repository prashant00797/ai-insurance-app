const Footer = () => {
  const contactData = {
    headerLabel: "© 2026 Insure AI · ",
    links: [
      {
        name: "Feedback · ",
        link: "mailto:prashantnath6307@gmail.com",
      },
      {
        name: "Github",
        link: "https://github.com/prashant00797",
      },
    ],
  };
  return (
    <div className="text-center text-sm text-gray-500 py-4 tracking-wide">
      {contactData.headerLabel}
      {contactData.links.map((link) => {
        return (
          <a
            href={link.link}
            target="_blank"
            className="hover:text-primary-600"
          >
            {link.name}
          </a>
        );
      })}
    </div>
  );
};

export default Footer;
