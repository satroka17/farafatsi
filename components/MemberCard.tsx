import Image from "next/image";

type MemberProps = {
  name: string;
  role: string;
  description: string;
  image?: string;
};

export default function MemberCard({
  name,
  role,
  description,
  image,
}: MemberProps) {
  return (
    <div className="group text-center">
      {/* Photo - Large rounded rectangle like Analasoa */}
      <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[3/4] bg-gradient-to-br from-green-100 to-green-200">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700">
            <span className="text-6xl font-bold text-white">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>
        <p className="text-green-600 font-semibold mb-3 text-sm">
          {role}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}