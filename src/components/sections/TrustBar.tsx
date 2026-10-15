import * as React from "react";
import { ShieldCheck, Radio, Users, Music2, Globe } from "lucide-react";

export const TrustBar = () => {
  const metrics = [
    {
      value: "50M+",
      label: "Monthly Ecosystem Streams",
      icon: Music2,
      accent: "text-amber-400"
    },
    {
      value: "2,400+",
      label: "Syndicate Creators",
      icon: Users,
      accent: "text-sky-400"
    },
    {
      value: "12,000+",
      label: "Live Radio Listeners",
      icon: Radio,
      accent: "text-emerald-400"
    },
    {
      value: "150+",
      label: "Global Streaming Platforms",
      icon: Globe,
      accent: "text-pink-400"
    },
    {
      value: "100%",
      label: "Direct Copyright Ownership",
      icon: ShieldCheck,
      accent: "text-amber-400"
    }
  ];

  return (
    <section className="bg-[#0E0D12] border-b border-white/10 py-8 px-4 sm:px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`p-4 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-amber-500/30 rounded-xl transition-all flex flex-col justify-between group shadow-lg ${
                  idx === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${item.accent}`} />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
                    VERIFIED
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-amber-300 transition-colors">
                    {item.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-400 leading-tight mt-1">
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
