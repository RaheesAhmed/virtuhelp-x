"use client";

import { useState } from "react";
import {
  Bot,
  FileText,
  Sparkles,
  BookOpen,
  ArrowRight,
  Search,
  Zap,
  Lock,
  BrainCircuit,
  FileQuestion,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import { useAuth } from "@/lib/useAuth";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const floatingDocsAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function LandingPage() {
  const { user } = useAuth();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#162454] to-[#0A0F1E]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_300px,#3B82F6,transparent)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_400px_at_80%_80%,#6366F1,transparent)]" />
        </div>
      </div>

      <NavBar className="bg-transparent backdrop-blur-sm border-b border-white/10" />

      <main className="relative">
        {/* Hero Section with Floating Documents */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-6 py-2 mb-8"
                >
                  <BrainCircuit className="w-5 h-5 mr-2 text-blue-400" />
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-medium">
                    AI-Powered Document Intelligence
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl lg:text-6xl font-bold mb-6 font-display"
                >
                  Your Documents,{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Intelligently Unlocked
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-300 mb-8 leading-relaxed"
                >
                  Transform static documents into interactive knowledge bases.
                  Ask questions in natural language and get instant, accurate
                  insights powered by advanced AI.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-all duration-200">
                    Watch Demo
                  </button>
                </motion.div>
              </div>

              {/* Right Side - Interactive Document Demo */}
              <div className="relative h-[600px] hidden lg:block">
                {/* Floating Documents with Glow Effect */}
                <div className="absolute inset-0">
                  {[
                    { top: "10%", left: "20%", delay: 0 },
                    { top: "30%", left: "60%", delay: 0.2 },
                    { top: "60%", left: "30%", delay: 0.4 },
                    { top: "80%", left: "70%", delay: 0.6 },
                  ].map((pos, index) => (
                    <motion.div
                      key={index}
                      custom={pos.delay}
                      variants={floatingDocsAnimation}
                      initial="hidden"
                      animate="visible"
                      className="absolute"
                      style={{ top: pos.top, left: pos.left }}
                    >
                      <div className="relative p-4 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 w-64 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl" />
                        <div className="relative">
                          <div className="flex items-center mb-3">
                            <FileText className="w-5 h-5 text-blue-400 mr-2" />
                            <div className="h-2 bg-white/20 rounded w-32" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-white/20 rounded w-full" />
                            <div className="h-2 bg-white/20 rounded w-3/4" />
                            <div className="h-2 bg-white/20 rounded w-5/6" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Central AI Interaction Demo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 w-80">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl" />
                    <div className="relative">
                      <div className="flex items-center mb-4">
                        <Bot className="w-6 h-6 text-blue-400 mr-2" />
                        <span className="font-medium text-white">
                          AI Assistant
                        </span>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="bg-white/5 p-3 rounded-lg">
                          <p className="text-sm text-gray-300">
                            How can I help you understand your documents?
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center bg-white/5 rounded-lg p-2">
                        <input
                          type="text"
                          placeholder="Ask about your documents..."
                          className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-300 placeholder-gray-500"
                        />
                        <button className="p-2 bg-blue-500/20 rounded-lg">
                          <ArrowRight className="w-4 h-4 text-blue-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">
                Unlock the Power of{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Document Intelligence
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Transform how you interact with business documents using our
                advanced AI features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileQuestion className="w-6 h-6 text-blue-400" />,
                  title: "Natural Language Queries",
                  description:
                    "Ask questions about your documents in plain English and get instant, accurate answers",
                },
                {
                  icon: <MessagesSquare className="w-6 h-6 text-indigo-400" />,
                  title: "Interactive Conversations",
                  description:
                    "Engage in natural dialogue with your documents through our AI assistant",
                },
                {
                  icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
                  title: "Deep Document Understanding",
                  description:
                    "Our AI comprehends context, relationships, and nuances within your documents",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="p-3 bg-white/5 rounded-lg w-fit mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 font-display">
              Transform Your Documents in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Three Simple Steps
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Upload Documents",
                  description:
                    "Securely upload your business documents or access our premium content library",
                  icon: <FileText className="w-6 h-6 text-blue-400" />,
                },
                {
                  step: "02",
                  title: "Ask Questions",
                  description:
                    "Use natural language to ask questions about your documents",
                  icon: <MessagesSquare className="w-6 h-6 text-indigo-400" />,
                },
                {
                  step: "03",
                  title: "Get Insights",
                  description:
                    "Receive instant, AI-powered answers and actionable insights",
                  icon: <Sparkles className="w-6 h-6 text-purple-400" />,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -top-4 -left-4">
                    <span className="text-4xl font-bold text-white/10">
                      {step.step}
                    </span>
                  </div>
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="p-3 bg-white/5 rounded-lg w-fit mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">
                Simple, Transparent{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that best fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Free",
                  price: "$0",
                  features: [
                    "1 document per month",
                    "3 AI questions per document",
                    "Basic document analysis",
                    "Community support",
                  ],
                  cta: "Start Free",
                  popular: false,
                },
                {
                  name: "Professional",
                  price: "$29",
                  period: "/month",
                  features: [
                    "10 documents per month",
                    "Unlimited AI questions",
                    "Advanced document analysis",
                    "Priority support",
                    "Custom document upload",
                    "Export capabilities",
                  ],
                  cta: "Get Started",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Unlimited documents",
                    "Unlimited AI questions",
                    "White-label solution",
                    "Dedicated support",
                    "API access",
                    "Custom integrations",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div
                    className={`absolute inset-0 rounded-xl blur-xl transition-opacity duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-100"
                        : "bg-white/5 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <div
                    className={`relative p-8 rounded-xl backdrop-blur-sm ${
                      plan.popular
                        ? "border-2 border-blue-500/50 bg-white/10"
                        : "border border-white/10 bg-white/5"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-500">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-xl font-semibold mb-4">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center gap-x-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.period && (
                          <span className="text-gray-400">{plan.period}</span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10" />
              </div>

              <div className="relative px-8 py-16 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">
                  Ready to Transform Your{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Document Experience?
                  </span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using our platform to
                  unlock their document potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg font-medium hover:opacity-90 transition-all duration-200">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-all duration-200">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative pt-24 pb-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="text-lg font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center text-gray-400">
              <p>© 2024 VirtuHelpX. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
