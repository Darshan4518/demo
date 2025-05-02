import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const CounterItem = ({ value, label }: { value: number; label: string }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      const duration = 2000; 
      const steps = 50;
      const stepTime = duration / steps;
      const increment = value / steps;
      let currentStep = 0;
  
      countRef.current = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.round(increment * currentStep), value));
  
        if (currentStep >= steps) {
          if (countRef.current) clearInterval(countRef.current);
        }
      }, stepTime);
  
      return () => {
        if (countRef.current) clearInterval(countRef.current);
      };
    }, [value]);
  
    return (
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-2">
          {count}
          {label.includes("%") ? "%" : "+"}
        </div>
        <div className="text-slate-600">{label}</div>
      </motion.div>
    );
  };
const Approch = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-100 py-20 px-4 md:px-10 ">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/60 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-pink-100"
    >
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Our Impact in Numbers
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We've helped businesses across Dubai achieve remarkable growth through our digital marketing expertise.
        </p>
      </div>
  
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <CounterItem value={150} label="Happy Clients" />
        <CounterItem value={500} label="Projects Completed" />
        <CounterItem value={85} label="ROI Increase %" />
        <CounterItem value={12} label="Years Experience" />
      </div>
    </motion.div>
  
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Our Approach
        </h3>
        <p className="text-slate-600 max-w-3xl mx-auto">
          We follow a proven methodology to ensure your digital marketing campaigns deliver exceptional results.
        </p>
      </motion.div>
  
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            step: "1. Research & Strategy",
            description:
              "We analyze your business, competitors, and target audience to develop a tailored strategy.",
          },
          {
            step: "2. Implementation & Optimization",
            description:
              "We execute the strategy and continuously optimize for maximum performance.",
          },
          {
            step: "3. Analysis & Reporting",
            description:
              "We provide detailed reports and insights to track progress and inform future decisions.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md p-6 rounded-lg shadow-md border border-slate-200"
          >
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-slate-800">
                  {item.step}
                </h4>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default Approch