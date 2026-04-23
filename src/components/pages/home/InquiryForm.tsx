"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

interface InquiryFormProps {
  dictionary: any;
}

export function InquiryForm({ dictionary }: InquiryFormProps) {
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
        <h3 className="text-xl font-bold mb-2">{dictionary.forms.inquiry.successTitle}</h3>
        <p className="text-on-surface-variant">{dictionary.forms.inquiry.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Textarea
        name="question"
        label={dictionary.forms.inquiry.label}
        placeholder={dictionary.forms.inquiry.placeholder}
        rows={4}
        required
      />
      {status === "error" && (
        <p className="text-error text-xs font-medium">{dictionary.forms.inquiry.errorMessage}</p>
      )}
      <Button 
        variant="primary" 
        size="lg" 
        className="w-full" 
        rightIcon={status === "loading" ? undefined : "terminal"}
        type="submit"
        isLoading={status === "loading"}
      >
        {status === "loading" ? dictionary.forms.inquiry.loading : dictionary.forms.inquiry.submit}
      </Button>
    </form>
  );
}
