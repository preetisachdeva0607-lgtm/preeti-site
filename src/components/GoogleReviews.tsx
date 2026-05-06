import { siteConfig } from "@/data/content";

export default function GoogleReviews() {
  return (
    <section className="py-8 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a
          href="https://g.co/kgs/gsPFCbw"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-slate-600 hover:text-slate-900 transition-colors group"
        >
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-amber-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-semibold">5.0</span>
          <span className="text-sm">Google Rating</span>
          <span className="text-sm text-coral-500 group-hover:underline">
            Read 50+ reviews →
          </span>
        </a>
      </div>
    </section>
  );
}
