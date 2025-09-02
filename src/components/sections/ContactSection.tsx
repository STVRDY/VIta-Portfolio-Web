import SectionWrapper from './SectionWrapper';

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" title="EXECUTE: CONTACT.EXE">
      <div className="max-w-lg mx-auto text-left">
        <p className="mb-8">// Use this form to send a secure message...</p>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">&gt; USERNAME:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 bg-transparent border border-crt-green focus:ring-2 focus:ring-crt-amber focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">&gt; EMAIL_ADDRESS:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 bg-transparent border border-crt-green focus:ring-2 focus:ring-crt-amber focus:outline-none" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">&gt; MESSAGE:</label>
            <textarea id="message" name="message" rows={5} required className="w-full p-2 bg-transparent border border-crt-green focus:ring-2 focus:ring-crt-amber focus:outline-none"></textarea>
          </div>
          <button type="submit" className="w-full border-2 border-crt-amber text-crt-amber font-bold py-3 px-4 hover:bg-crt-amber hover:text-crt-black transition-colors duration-200">
            SEND_MESSAGE
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}