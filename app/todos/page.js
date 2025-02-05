'use client';
// 10:45

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const PRIORITY_LABELS = {
    urgent: { text: '緊急', color: 'bg-red-100 text-red-800' },
    important: { text: '重要', color: 'bg-purple-100 text-purple-800' },
    normal: { text: '普通', color: 'bg-gray-100 text-gray-800' }
};

export default function TodoPage() {
    const [isInitialized, setIsInitialized] = useState(false);
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [priority, setPriority] = useState('normal');

    // 在組件載入時從 localStorage 讀取待辦事項
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            // 確保舊的待辦事項都有 priority 屬性
            const parsedTodos = JSON.parse(savedTodos).map(todo => ({
                ...todo,
                priority: todo.priority || 'normal'
            }));
            setTodos(parsedTodos);
        }
        setIsInitialized(true);
    }, []);

    // 當待辦事項改變時，儲存到 localStorage
    useEffect(() => {
        // 只有在初始化完成後才更新 localStorage
        if (isInitialized) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos, isInitialized]);

    const addTodo = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;

        setTodos([...todos, {
            id: Date.now(),
            text: newTodo,
            completed: false,
            priority: priority
        }]);
        setNewTodo('');
        setPriority('normal'); // 重置為預設值
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">待辦事項</h1>

            <form onSubmit={addTodo} className="mb-8">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="輸入新的待辦事項..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="urgent">緊急</option>
                        <option value="important">重要</option>
                        <option value="normal">普通</option>
                    </select>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
                    >
                        <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                        新增
                    </button>
                </div>
            </form>

            <ul className="space-y-3">
                {todos.map(todo => (
                    <li key={todo.id} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="w-5 h-5 cursor-pointer"
                        />
                        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                            {todo.text}
                        </span>
                        <span className={`px-2 py-1 rounded-md text-sm ${PRIORITY_LABELS[todo.priority || 'normal'].color}`}>
                            {PRIORITY_LABELS[todo.priority || 'normal'].text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="px-3 py-1 text-red-500 hover:bg-red-50 rounded flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faTrashCan} className="w-4 h-4" />
                            刪除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
} 