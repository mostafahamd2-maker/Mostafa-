import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl shadow-green-500/40 hover:scale-110 transition-all group"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-0" />
    </a>
  );
}
