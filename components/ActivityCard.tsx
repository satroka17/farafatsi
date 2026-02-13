type ActivityCardProps = {
  tag: string;
  tagColor: "green" | "blue" | "orange" | "purple" | "red";
  icon: string;
  title: string;
  description: string;
};

const tagColors = {
  green: "bg-green-100 text-green-700 border-green-300",
  blue: "bg-blue-100 text-blue-700 border-blue-300",
  orange: "bg-orange-100 text-orange-700 border-orange-300",
  purple: "bg-purple-100 text-purple-700 border-purple-300",
  red: "bg-red-100 text-red-700 border-red-300",
};

const iconBgColors = {
  green: "bg-green-50",
  blue: "bg-blue-50",
  orange: "bg-orange-50",
  purple: "bg-purple-50",
  red: "bg-red-50",
};

export default function ActivityCard({
  tag,
  tagColor,
  icon,
  title,
  description,
}: ActivityCardProps) {
  return (
    <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
      {/* Icon with background */}
      <div className={`w-16 h-16 ${iconBgColors[tagColor]} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Tag */}
      <div className="mb-4">
        <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold border ${tagColors[tagColor]}`}>
          {tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}