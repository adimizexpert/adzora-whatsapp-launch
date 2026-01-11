const TopBanner = () => {
  const messages = [
    "🚀 Get 20% OFF on your first campaign",
    "📈 100+ Brands Trust Adzora",
    "💬 Free Strategy Call Available",
    "🎯 Results-Driven Advertising",
  ];

  // Duplicate messages for seamless loop
  const duplicatedMessages = [...messages, ...messages];

  return (
    <div className="fixed left-0 right-0 top-0 z-50 overflow-hidden bg-primary py-2">
      <div className="animate-marquee flex whitespace-nowrap">
        {duplicatedMessages.map((msg, index) => (
          <span
            key={index}
            className="mx-8 text-sm font-medium text-primary-foreground"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
