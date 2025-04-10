interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  export default function ServiceCard({ icon, title, description }: Props) {
    return (
      <div className="bg-white shadow-md p-6 rounded-xl text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    );
  }
  