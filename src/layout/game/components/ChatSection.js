"use client"

import { useState } from "react"
import { MessageCircle, Send, Car } from "lucide-react"

function ChatSection({ messages }) {
  const [chatMessage, setChatMessage] = useState("")

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Handle sending message logic here
      setChatMessage("")
    }
  }

  return (
      <div className="flex-1 border-t border-gray-200 flex flex-col">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-base font-semibold text-gray-800 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
            실시간 채팅
          </h3>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-2">
          {messages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-3">
                <Car className={`w-5 h-5 mt-0.5 ${msg.color}`} />
                <div>
                  <div className="text-sm! font-medium text-gray-600">{msg.user}</div>
                  <div className="text-sm! text-gray-800">{msg.message}</div>
                </div>
              </div>
          ))}
        </div>
        <div className="p-3 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
                type="text"
                placeholder="메시지를 입력하세요..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            <button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
  )
}

export default ChatSection
