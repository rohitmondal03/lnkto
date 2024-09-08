import { Link, Laptop, Smartphone, Server } from "lucide-react"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 flex items-center justify-center text-blue-600">
            <Link className="w-10 h-10 mr-2" />
            lnkto
          </h1>
          <p className="text-xl text-gray-600">Streamline Your Links, Amplify Your Reach</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-blue-800">Why Choose lnkto?</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Lightning-fast link shortening</li>
                <li>Secure and reliable redirects</li>
                <li>Detailed analytics and click tracking</li>
                <li>Customizable short URLs</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-purple-800">How It Works</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Paste your long URL</li>
                <li>Click and Shorten URL</li>
                <li>Copy your new, shortened link</li>
                <li>Share across platforms</li>
              </ol>
            </div>
          </div>
          <div className="relative h-96">
            {/* Tech illustrations */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 border-4 border-blue-200 rounded-full animate-pulse"></div>
            </div>
            <Laptop className="absolute top-1/4 left-1/4 w-16 h-16 text-blue-500 animate-float" />
            <Smartphone className="absolute top-1/2 right-1/4 w-12 h-12 text-purple-500 animate-float-delayed" />
            <Server className="absolute bottom-1/4 left-1/3 w-14 h-14 text-green-500 animate-float" />
            {/* Abstract tech elements */}
            <svg className="absolute top-1/3 right-1/3 w-20 h-20 text-yellow-500 animate-spin-slow" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            <svg className="absolute bottom-1/4 right-1/4 w-16 h-16 text-red-500 animate-pulse" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3,12L7,16V13H14V11H7V8M21,12L17,8V11H10V13H17V16" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}