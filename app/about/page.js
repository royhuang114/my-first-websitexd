export default function About() {
    return (
        <>
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-center text-green-600 mb-8">關於本站</h1>
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <p className="text-gray-600 leading-relaxed mb-4">
                        這是一個使用 Next.js 和 TailwindCSS 建立的個人作品集網站。網站展示了我的專業技能、作品案例以及個人簡介。
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        本站採用現代化的響應式設計，確保在各種裝置上都能提供最佳的瀏覽體驗。網站的設計理念著重於簡潔、易用性和視覺美感的平衡。
                    </p>
                </div>
                <div className="text-center">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        返回首頁
                    </a>
                </div>
            </div>
        </>
    );
}
