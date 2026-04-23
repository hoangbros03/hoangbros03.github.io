"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

interface AskFormProps {
  dictionary: any;
}

export function AskForm({ dictionary }: AskFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mnjlgboj", {
        method: "POST",
        body: JSON.stringify({
          message: formData.get("anonymous-question"),
          _subject: "New Anonymous Question from Portfolio",
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 8000);
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
      <div className="py-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-2">
          <span className="material-symbols-outlined text-sm">check_circle</span>
          {dictionary.forms.ask.successTitle}
        </div>
        <p className="text-on-surface-variant text-sm font-[family-name:var(--font-manrope)]">
          {dictionary.forms.ask.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Textarea
        name="anonymous-question"
        label={dictionary.forms.ask.label}
        placeholder={dictionary.forms.ask.placeholder}
        rows={3}
        required
      />
      {status === "error" && (
        <p className="text-error text-xs font-medium">{dictionary.forms.ask.errorMessage}</p>
      )}
      <div className="flex justify-between items-center">
        <span className="text-xs text-on-surface-variant flex items-center gap-2 font-[family-name:var(--font-manrope)]">
          <span>🔒</span> {dictionary.forms.ask.anonymousLabel}
        </span>
        <Button 
          variant="primary" 
          rightIcon={status === "loading" ? undefined : "send"} 
          type="submit"
          isLoading={status === "loading"}
        >
          {status === "loading" ? dictionary.forms.ask.loading : dictionary.forms.ask.submit}
        </Button>
      </div>
    </form>
  );
}
