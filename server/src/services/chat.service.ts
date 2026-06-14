const knowledgeBase: Record<string, string> = {
  hours: 'We are open Monday–Friday 9AM–8PM, Saturday 8AM–7PM, and Sunday 10AM–5PM.',
  opening: 'We are open Monday–Friday 9AM–8PM, Saturday 8AM–7PM, and Sunday 10AM–5PM.',
  book: 'You can book an appointment by calling us at +44 (0) 123 456 7890, through WhatsApp, or by filling out our contact form on the website.',
  appointment: 'You can book an appointment by calling us at +44 (0) 123 456 7890, through WhatsApp, or by filling out our contact form on the website.',
  services: 'We offer Signature Haircuts, Beard Sculpting, Hair Coloring, Scalp Treatments, Kids Cuts, and our Royal Package. Check the Services section for full details and pricing!',
  price: 'Our packages start from £25 (Classic), £45 (Premium), and £75 (Royal). Individual services start from £12 for kids cuts.',
  pricing: 'Our packages start from £25 (Classic), £45 (Premium), and £75 (Royal). Individual services start from £12 for kids cuts.',
  location: 'We are located at 123 High Street, London, W1 2AB. There is free street parking and a car park a 2-minute walk away.',
  where: 'We are located at 123 High Street, London, W1 2AB. There is free street parking and a car park a 2-minute walk away.',
  parking: 'Yes! There is free street parking on surrounding streets and a pay-and-display car park just a 2-minute walk from the salon.',
  walk: 'We welcome both walk-ins and appointments. We recommend booking in advance for weekends and peak hours.',
  kids: 'Absolutely! We welcome kids aged 3 and above. Our barbers are great with young clients. Kids cuts start from £12.',
  products: 'We use premium products including Reuzel, Uppercut Deluxe, and American Crew. We also sell our own curated range.',
  payment: 'We accept cash, all major credit/debit cards, Apple Pay, Google Pay, and contactless payments.',
  loyalty: 'Yes! After every 5 visits, you receive a complimentary service upgrade. Ask our team for details.',
  group: 'We offer group bookings for weddings, stag parties, and events. Contact us for custom packages.',
};

export const generateChatResponse = (input: string): string => {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (lower.includes(key)) return value;
  }
  return "Thanks for your message! For specific enquiries, please call us at +44 (0) 123 456 7890 or use the contact form. We'd love to help you look your best! ✨";
};
