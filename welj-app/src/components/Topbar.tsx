import { Phone, Mail, Globe } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="bg-[#022f4b] text-white text-sm py-4 px-4 flex flex-col md:flex-row justify-between items-center z-50 relative">
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-cyan-400" />
          <span>+509 3834 7343</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-cyan-400" />
          <span>info@awelj.com</span>
        </div>
      </div>
      <div className="flex gap-6 items-center mt-2 md:mt-0">
        <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition-colors">
          <Globe size={16} className="text-cyan-400" />
          <span>Shipping Calculator</span>
        </div>
        <div className="cursor-pointer hover:text-cyan-400 transition-colors">
          Countries we ship to <span className="text-xs">▼</span>
        </div>
        <div className="cursor-pointer hover:text-cyan-400 transition-colors">
          English <span className="text-xs">▼</span>
        </div>
      </div>
    </div>
  );
}
