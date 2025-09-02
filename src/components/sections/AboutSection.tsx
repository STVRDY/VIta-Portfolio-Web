import { FiDownload } from "react-icons/fi";
import { SKILLS } from '../../utils/constants';
import SectionWrapper from './SectionWrapper';

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="SYSTEM.INFO: ABOUT_ME">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 p-2 border-2 border-crt-green bg-crt-black">
            <img src="/assets/images/Profile.webp" alt="ASCII art representation of Jhael Báez" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="mb-6 whitespace-pre-wrap leading-relaxed">
{`C:\\Users\\Jhael> type bio.txt
Bienvenido a mi terminal.
Soy un creativo apasionado por la comunicación visual. Mi enfoque combina estrategia y estética para crear experiencias digitales que impactan y conectan.
Siempre estoy aprendiendo y explorando nuevas herramientas para llevar cada proyecto al siguiente nivel. Accessing skill set...`}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {SKILLS.map(skill => (
              <span key={skill} className="bg-crt-green text-crt-black text-sm px-3 py-1.5">{skill}</span>
            ))}
          </div>
          <a href="/assets/documents/cv-placeholder.pdf" download="CV - Jhael Baez.pdf" className="inline-flex items-center gap-2 border border-crt-amber text-crt-amber px-4 py-2 hover:bg-crt-amber hover:text-crt-black transition-colors duration-200">
            DOWNLOAD_CV.PDF <FiDownload />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}