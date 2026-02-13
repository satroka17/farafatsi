type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  image,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors group/link"
        >
          <span>LIRE PLUS</span>
          <svg 
            className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}