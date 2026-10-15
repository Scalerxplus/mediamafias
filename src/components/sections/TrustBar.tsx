import * as React from "react";
import { ShieldCheck, Radio, Users, Music2, Globe } from "lucide-react";

export const TrustBar = () => {
  const metrics = [
    {
      value: "50M+",
      label: "Monthly Ecosystem Streams",
      icon: Music2,
      color: "bg-[#E5FF00]"
    },
    {
      value: "2,400+",
      label: "Folk Creators Onboarded",
      icon: Users,
      color: "bg-[#FED7AA]"
    },
    {
      value: "12,000+",
      label: "Live Radio Streams",
      icon: Radio,
      color: "bg-[#00E5FF]"
    },
    {
      value: "150+",
      label: "Global DSPs via Madverse",
      icon: Globe,
      color: "bg-[#FF69B4]"
    },
    {
      value: "100%",
      label: "Direct IP Ownership & Indemnity",
      icon: ShieldCheck,
      color: "bg-[#F59E0B]"
    }
  ];

  return (
    <section className="bg-white border-b-4 border-black py-8 px-4 sm:px-6 shadow-[0_4px_0_0_#000] relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`p-4 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between ${item.color} ${idx === 4 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-5 h-5 text-black" />
                  <span className="font-mono text-[10px] font-black uppercase text-black/70">VERIFIED</span>
                </div>
                <div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-black">
                    {item.value}
                  </div>
                  <div className="font-mono text-xs font-bold text-neutral-900 leading-tight mt-0.5">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
