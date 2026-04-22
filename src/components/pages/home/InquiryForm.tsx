"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mnjlgboj", {
        method: "POST",
        body: JSON.stringify({
          message: formData.get("question"),
          _subject: "New Direct Inquiry from Portfolio",
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        console.error(`Formspree Error (Status ${response.status}):`, data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
        </div>
        <h3 className="text-xl font-bold mb-2">Query Transmitted</h3>
        <p className="text-on-surface-variant">Your inquiry has been sent to my inbox.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Textarea
        name="question"
        label="SYSTEM PROMPT / QUESTION"
        placeholder="Explain the role of attention masks in sparse transformer architectures..."
        rows={4}
        required
      />
      {status === "error" && (
        <p className="text-error text-xs font-medium">Failed to send. Please try again or contact me directly.</p>
      )}
      <Button 
        variant="primary" 
        size="lg" 
        className="w-full" 
        rightIcon={status === "loading" ? undefined : "terminal"}
        type="submit"
        isLoading={status === "loading"}
      >
        {status === "loading" ? "Transmitting..." : "Execute Query"}
      </Button>
    </form>
  );
}
