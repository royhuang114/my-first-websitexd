'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ChatRoomPage() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || isLoading) return;

        const userMessage = {
            id: Date.now(),
            text: newMessage,
            timestamp: new Date().toLocaleTimeString(),
            isUser: true
        };

        setMessages(prev => [...prev, userMessage]);
        setNewMessage('');
        setIsLoading(true);

        try {
            const response = await fetch('/chat-ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userInput: newMessage }),
            });

            const data = await response.json();

            if (response.ok) {
                const aiMessage = {
                    id: Date.now() + 1,
                    text: data.response,
                    timestamp: new Date().toLocaleTimeString(),
                    isUser: false
                };
                setMessages(prev => [...prev, aiMessage]);
            } else {
                console.error('API 錯誤:', data.error);
                // 可以在這裡加入錯誤提示
            }
        } catch (error) {
            console.error('請求錯誤:', error);
            // 可以在這裡加入錯誤提示
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">聊天室</h1>

            {/* 聊天輸入區域 */}
            <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="輸入訊息..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className={`px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center gap-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                        {isLoading ? '處理中...' : '送出'}
                    </button>
                </div>
            </form>

            {/* 聊天訊息顯示區域 */}
            <div className="space-y-4">
                {messages.map(message => (
                    <div key={message.id}
                        className={`flex flex-col ${message.isUser ? 'items-end' : 'items-start'}`}>
                        <div className={`px-4 py-2 rounded-lg max-w-[80%] ${message.isUser
                            ? 'bg-green-100 text-gray-800'
                            : 'bg-gray-100 text-gray-800'
                            }`}>
                            <p>{message.text}</p>
                            <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 