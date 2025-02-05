export default function Home() {

    return (
        <>
            <header className="p-8 text-center border-b border-gray-200">
                <h1 className="font-bold text-4xl text-green-600 mb-4">Hi 我叫 Andy</h1>
                <h2 className="text-2xl text-gray-600">我是一個前端工程師</h2>
                <a
                    href="/about"
                    className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                    關於本站
                </a>
            </header>
            <section className="p-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800">作品專區</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="/images/photo1.jpg"
                            alt="專案圖片"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-green-600 mb-2">智慧型購物助手</h3>
                            <p className="text-gray-600">
                                運用AI技術打造的個人化購物推薦系統，能依據使用者喜好提供最適合的商品建議。
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="/images/photo2.jpg"
                            alt="專案圖片"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-green-600 mb-2">線上學習平台</h3>
                            <p className="text-gray-600">
                                整合多元課程資源的教育平台，提供互動式學習體驗與即時進度追蹤功能。
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="/images/photo3.jpg"
                            alt="專案圖片"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-green-600 mb-2">社群媒體儀表板</h3>
                            <p className="text-gray-600">
                                一站式社群管理工具，整合數據分析與內容排程，協助企業優化社群經營策略。
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="p-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">關於我</h2>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="space-y-6">
                            <p className="text-gray-600 leading-relaxed">
                                你好!我是Andy，一位充滿熱情的前端工程師，擁有5年以上的網頁開發經驗。我專注於打造直覺且優雅的使用者介面，善於運用現代化的前端技術框架，如React、Next.js等，來建構高效能的網頁應用。
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                在我的職業生涯中，我特別重視使用者體驗與網頁效能的優化。我喜歡探索新技術，並將其應用在實際專案中，以創造更好的數位體驗。同時，我也熱衷於團隊合作，相信良好的溝通與協作是專案成功的關鍵。
                            </p>
                            <div className="flex flex-wrap gap-3 mt-4">
                                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">React</span>
                                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">Next.js</span>
                                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">TypeScript</span>
                                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">TailwindCSS</span>
                                <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">UI/UX設計</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">聯絡資訊</h3>
                            <ul className="space-y-2">
                                <li>電話: (02) 2345-6789</li>
                                <li>傳真: (02) 2345-6780</li>
                                <li>Email: contact@andydesign.com</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">公司地址</h3>
                            <p>台北市信義區松仁路100號 15樓</p>
                            <p>創意設計中心</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">營業時間</h3>
                            <p>週一至週五</p>
                            <p>上午 9:00 - 下午 6:00</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">關於我們</h3>
                            <p>創意數位設計有限公司</p>
                            <p>統一編號: 12345678</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p>&copy; 2024 創意數位設計有限公司. 版權所有.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
