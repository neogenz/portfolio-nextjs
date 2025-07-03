"use client";

import { useState } from "react";
import { ArrowRight, BellRing } from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "next-themes";

// Fonctions utilitaires pour les toasts
const createToastUtils = (resolvedTheme: string | undefined) => {
  const isDarkTheme = resolvedTheme === "dark";

  return {
    showSuccessToast: (
      message = "Merci de m'avoir contacté. Je vous répondrai bientôt."
    ) => {
      toast("Message envoyé", {
        description: message,
        position: "top-center",
        closeButton: true,
        style: {
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          opacity: 1,
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      });
    },

    showErrorToast: (
      errorMessage = "Une erreur est survenue lors de l'envoi du message"
    ) => {
      toast("Erreur", {
        description: errorMessage,
        className:
          "!bg-red-100 !text-red-800 !border-red-300 dark:!bg-red-900 dark:!text-red-100 dark:!border-red-700",
        position: "top-center",
        closeButton: true,
        style: {
          backgroundColor: isDarkTheme
            ? "hsl(var(--red-900))"
            : "hsl(var(--red-100))",
          color: isDarkTheme ? "hsl(var(--red-100))" : "hsl(var(--red-800))",
          opacity: 1,
          border: `1px solid ${
            isDarkTheme ? "hsl(var(--red-700))" : "hsl(var(--red-300))"
          }`,
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      });
    },
  };
};

const Contact = () => {
  const { resolvedTheme } = useTheme();
  const { showSuccessToast, showErrorToast } = createToastUtils(resolvedTheme);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 429) {
        // Rate limit atteint
        setIsRateLimited(true);
        throw new Error(
          `Trop de messages envoyés. Veuillez réessayer plus tard.`
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error || "Une erreur est survenue lors de l'envoi du message"
        );
      }

      // Show success message
      showSuccessToast();

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur:", error);

      // Show error message
      showErrorToast(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi du message"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour tester les toasts sans envoyer d'email
  const testToasts = () => {
    // Tester les deux types de toast
    showSuccessToast();

    // Tester le toast d'erreur après un délai
    setTimeout(() => {
      showErrorToast();
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="bg-white section-padding dark:bg-maxime-dark-bg"
    >
      <div className="mx-auto container-padding">
        {/* Minimal Header */}
        <div className="mb-24 text-center">
          <div className="flex gap-3 justify-center items-center mb-4 reveal">
            <span className="w-2 h-2 rounded-full bg-maxime-primary dark:bg-maxime-white"></span>
            <span className="text-sm tracking-widest uppercase text-maxime-secondary dark:text-maxime-white/70">
              Contact
            </span>
          </div>
          <h2
            className="text-5xl font-light tracking-tight md:text-6xl lg:text-7xl text-maxime-primary dark:text-maxime-white reveal"
            style={{ animationDelay: "0.2s" }}
          >
            Créons ensemble
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
          <div className="reveal">
            <p className="text-lg text-maxime-secondary dark:text-maxime-white/80">
              Je suis toujours ouvert à de nouveaux projets et collaborations.
              N&apos;hésitez pas à me contacter si vous avez un projet en tête
              ou simplement pour échanger.
            </p>

            <div className="mt-8">
              <p className="mb-2 text-maxime-secondary/60 dark:text-maxime-white/60">
                Email :
              </p>
              <a
                href="mailto:maxime.desogus@gmail.com"
                className="text-lg transition-colors text-maxime-primary dark:text-maxime-white hover:text-maxime-primary/80 dark:hover:text-maxime-white/80"
              >
                maxime.desogus@gmail.com
              </a>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-maxime-secondary/60 dark:text-maxime-white/60">
                Téléphone :
              </p>
              <a
                href="tel:+41764987631"
                className="text-lg transition-colors text-maxime-primary dark:text-maxime-white hover:text-maxime-primary/80 dark:hover:text-maxime-white/80"
              >
                +41 76 498 76 31
              </a>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-maxime-secondary/60 dark:text-maxime-white/60">
                Localisation :
              </p>
              <p className="text-lg text-maxime-primary dark:text-maxime-white">
                Vétroz, Valais, Suisse
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-maxime-secondary/60 dark:text-maxime-white/60">
                Me suivre :
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/maxime-de-sogus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-maxime-primary dark:text-maxime-white hover:text-maxime-primary/80 dark:hover:text-maxime-white/70"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/neogenz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-maxime-primary dark:text-maxime-white hover:text-maxime-primary/80 dark:hover:text-maxime-white/70"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-lg bg-maxime-tertiary dark:bg-zinc-800 shadow-xs"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-maxime-secondary/70 dark:text-zinc-400"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="py-2 w-full border-b transition-colors bg-maxime-tertiary dark:bg-zinc-800 border-maxime-secondary/20 dark:border-zinc-700 focus:border-maxime-primary dark:focus:border-zinc-500 text-maxime-primary dark:text-white placeholder:text-maxime-secondary/40 dark:placeholder:text-zinc-500 outline-hidden"
                  placeholder="Votre nom"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-maxime-secondary/70 dark:text-zinc-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="py-2 w-full border-b transition-colors bg-maxime-tertiary dark:bg-zinc-800 border-maxime-secondary/20 dark:border-zinc-700 focus:border-maxime-primary dark:focus:border-zinc-500 text-maxime-primary dark:text-white placeholder:text-maxime-secondary/40 dark:placeholder:text-zinc-500 outline-hidden"
                  placeholder="Votre email"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-maxime-secondary/70 dark:text-zinc-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="py-2 w-full border-b transition-colors resize-none bg-maxime-tertiary dark:bg-zinc-800 border-maxime-secondary/20 dark:border-zinc-700 focus:border-maxime-primary dark:focus:border-zinc-500 text-maxime-primary dark:text-white placeholder:text-maxime-secondary/40 dark:placeholder:text-zinc-500 outline-hidden"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isRateLimited}
                className="flex justify-center items-center px-6 py-3 w-full text-white rounded-md transition-colors cursor-pointer bg-maxime-primary dark:bg-zinc-700 hover:bg-maxime-primary/90 dark:hover:bg-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="mr-3 -ml-1 w-5 h-5 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Envoi en cours...
                  </div>
                ) : isRateLimited ? (
                  <>Trop de messages envoyés</>
                ) : (
                  <>
                    Envoyer un message <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>

              {/* Bouton de test des toasts - visible uniquement en développement */}
              {process.env.NODE_ENV === "development" && (
                <button
                  type="button"
                  onClick={testToasts}
                  className="flex justify-center items-center px-4 py-2 mt-4 w-full text-sm text-gray-800 bg-gray-200 rounded-md border border-gray-400 border-dashed transition-colors dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  <BellRing className="mr-2 w-4 h-4" />
                  Prévisualiser les notifications (DEV)
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
