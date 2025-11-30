import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useOutletContext } from "react-router";
import { Star, User, ThumbsUp } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface ContextType {
  language: string;
}

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
}

export const ReviewsPage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    const savedReviews = localStorage.getItem("cgf-reviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const content = {
    en: {
      title: "Customer Reviews",
      subtitle: "What our clients say about us",
      form: {
        title: "Leave a Review",
        name: "Your Name",
        rating: "Rating",
        comment: "Your Review",
        submit: "Submit Review",
      },
      noReviews: "No reviews yet. Be the first to share your experience!",
    },
    ru: {
      title: "Отзывы Клиентов",
      subtitle: "Что говорят наши клиенты о нас",
      form: {
        title: "Оставить Отзыв",
        name: "Ваше Имя",
        rating: "Оценка",
        comment: "Ваш Отзыв",
        submit: "Отправить Отзыв",
      },
      noReviews: "Пока нет отзывов. Будьте первым, кто поделится опытом!",
    },
    az: {
      title: "Müştəri Rəyləri",
      subtitle: "Müştərilərimiz bizim haqqımızda nə deyirlər",
      form: {
        title: "Rəy Yazın",
        name: "Adınız",
        rating: "Qiymət",
        comment: "Rəyiniz",
        submit: "Rəyi Göndər",
      },
      noReviews: "Hələ rəy yoxdur. Təcrübənizi paylaşan ilk olun!",
    },
  };

  const t = content[language as keyof typeof content];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleDateString(),
      likes: 0,
    };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("cgf-reviews", JSON.stringify(updatedReviews));
    setFormData({ name: "", rating: 5, comment: "" });
  };

  const handleLike = (id: string) => {
    const updatedReviews = reviews.map((review) =>
      review.id === id ? { ...review, likes: review.likes + 1 } : review
    );
    setReviews(updatedReviews);
    localStorage.setItem("cgf-reviews", JSON.stringify(updatedReviews));
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className={`py-20 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0a1128] via-[#1e2749] to-[#0a1128]"
          : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className={`text-4xl md:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.title}
            </h1>
            <p className={`text-xl ${
              theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
            }`}>
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Review Form */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#0a1128]" : "bg-white"
      }`}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className={`p-8 rounded-2xl ${
              theme === "dark"
                ? "bg-[#1e2749]/50 border border-white/10"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <h2 className={`text-2xl mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.form.title}
            </h2>

            <div className="space-y-6">
              <div>
                <label className={`block text-sm mb-2 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"
                }`}>
                  {t.form.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl ${
                    theme === "dark"
                      ? "bg-[#0a1128] border border-white/10 text-white"
                      : "bg-white border border-gray-300 text-gray-900"
                  } focus:outline-none focus:border-[#4a90e2]`}
                  required
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"
                }`}>
                  {t.form.rating}
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          rating <= formData.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : theme === "dark"
                            ? "text-[#8b9dc3]"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm mb-2 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"
                }`}>
                  {t.form.comment}
                </label>
                <textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl ${
                    theme === "dark"
                      ? "bg-[#0a1128] border border-white/10 text-white"
                      : "bg-white border border-gray-300 text-gray-900"
                  } focus:outline-none focus:border-[#4a90e2]`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                }`}
              >
                {t.form.submit}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Reviews List */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#1e2749]" : "bg-gray-50"
      }`}>
        <div className="max-w-5xl mx-auto px-6">
          {reviews.length === 0 ? (
            <div className="text-center py-12">
              <p className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"}>
                {t.noReviews}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl ${
                    theme === "dark"
                      ? "bg-[#0a1128]/50 border border-white/10"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      theme === "dark" ? "bg-[#4a90e2]/20" : "bg-blue-100"
                    }`}>
                      <User className={`w-6 h-6 ${
                        theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                      }`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={theme === "dark" ? "text-white" : "text-gray-900"}>
                          {review.name}
                        </h3>
                        <span className={`text-sm ${
                          theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"
                        }`}>
                          {review.date}
                        </span>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : theme === "dark"
                                ? "text-[#8b9dc3]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <p className={`mb-4 ${
                        theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"
                      }`}>
                        {review.comment}
                      </p>

                      <button
                        onClick={() => handleLike(review.id)}
                        className={`flex items-center gap-2 text-sm ${
                          theme === "dark"
                            ? "text-[#5dd9d9] hover:text-[#4a90e2]"
                            : "text-blue-600 hover:text-blue-700"
                        } transition-colors`}
                      >
                        <ThumbsUp className="w-4 h-4" />
                        {review.likes} {language === "en" ? "Helpful" : language === "ru" ? "Полезно" : "Faydalı"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
