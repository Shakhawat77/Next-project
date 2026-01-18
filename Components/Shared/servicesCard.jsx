import Link from "next/link";
export default function ServiceCard({ service }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      
      {/* Image */}
      <div className="h-52 w-full overflow-hidden rounded-t-2xl">
        <img
          src={service.img}
          alt={service.serviceName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        
        {/* Service Info */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">
            {service.serviceName}
          </h2>
          <p className="text-sm text-slate-600">{service.duration}</p>
          <p className="text-sm text-slate-600">{service.location}</p>
        </div>

        {/* Cost & Status */}
        <div className="mt-4 flex justify-between items-center text-center">
          <span className="font-medium text-slate-900 text-lg">
            ৳ {service.totalCost}
          </span>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              service.status === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : service.status === "Confirmed"
                ? "bg-green-100 text-green-800"
                : service.status === "Completed"
                ? "bg-blue-100 text-blue-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {service.status}
          </span>
        </div>

        {/* See Details Button */}
        <div className="mt-5">
          <Link
            href={`/services/${service._id}`}
            className="block w-full text-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            See Details
          </Link>
        </div>

      </div>
    </div>
  );
}
