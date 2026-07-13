import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Book, HelpCircle, MessageSquare, Send, Paperclip, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("medium");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const popularArticles = [
    { title: "How to generate a lesson plan", category: "Getting Started" },
    { title: "Understanding AI recommendations", category: "Analytics" },
    { title: "Managing your classes", category: "Classes" },
    { title: "Exporting documents", category: "Documents" },
  ];

  const faqs = [
    { question: "How do I create a new class?", answer: "Go to the Classes page and click 'New Class' to create a new class." },
    { question: "Can I import students from a spreadsheet?", answer: "Yes, you can import students using the Import Students modal which supports CSV files." },
    { question: "How do I export lesson plans?", answer: "You can export lesson plans to PDF or DOCX format from the Lesson Plans page." },
    { question: "What are AI recommendations?", answer: "AI recommendations are personalized suggestions based on your class performance and learning patterns." },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Support Center</h1>
        <p className="text-muted-foreground mt-1">
          Need help with EducAssist?
        </p>
      </div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for help articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </motion.div>

      {/* Popular Articles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Book className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Popular Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {popularArticles.map((article, index) => (
            <button
              key={index}
              className="p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors text-left"
            >
              <p className="font-medium text-foreground">{article.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{article.category}</p>
            </button>
          ))}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <HelpCircle className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 rounded-xl border border-border bg-muted/30">
              <p className="font-medium text-foreground mb-2">{faq.question}</p>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Documentation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-4">
          <Book className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Documentation</h2>
        </div>
        <div className="space-y-2">
          {["Getting Started Guide", "User Manual", "API Documentation", "Best Practices"].map((doc, index) => (
            <button
              key={index}
              className="w-full p-3 rounded-xl border border-border hover:bg-muted/50 transition-colors text-left flex items-center justify-between"
            >
              <span className="text-foreground">{doc}</span>
              <span className="text-muted-foreground">→</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Contact Support Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="rounded-3xl border border-border bg-card p-6 shadow-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Contact Support</h2>
        </div>

        <AnimatePresence>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center"
            >
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h3>
              <p className="text-sm text-muted-foreground">Our support team will get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Brief description of your issue"
                  className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your issue in detail..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Attachment (Optional)</label>
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                  <Paperclip className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, PNG, JPG up to 10MB</p>
                </div>
              </div>

              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Submit Request
              </Button>
            </form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
