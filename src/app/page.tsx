"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4 pb-8">
            <CardTitle className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hello World
            </CardTitle>
            <CardDescription className="text-xl text-gray-600 max-w-md mx-auto">
              Welcome to your beautiful Next.js application with shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                🎉 Your application is running successfully!
              </p>
              <p className="text-gray-600">
                This page is built with modern technologies including:
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg">
                  <div className="font-semibold text-blue-800">Next.js 15</div>
                  <div className="text-sm text-blue-600">React Framework</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg">
                  <div className="font-semibold text-purple-800">shadcn/ui</div>
                  <div className="text-sm text-purple-600">UI Components</div>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-lg">
                  <div className="font-semibold text-pink-800">Tailwind CSS</div>
                  <div className="text-sm text-pink-600">Styling</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg">
                  <div className="font-semibold text-green-800">TypeScript</div>
                  <div className="text-sm text-green-600">Type Safety</div>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Start editing <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">src/app/page.tsx</code> to customize this page
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}