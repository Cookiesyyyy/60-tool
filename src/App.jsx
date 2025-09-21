import { useEffect, useState } from "react";

const BASE =
  "https://390f1d733e8e918aff132922876ada07433a6441-4399.dstack-prod5.phala.network";

export default function App() {
  const [answer, setAnswer] = useState(null);
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`${BASE}/v2/answer`)
      .then((res) => res.json())
      .then((data) => setAnswer(data.data));

    fetch(`${BASE}/v2/weather?city=Beijing`)
      .then((res) => res.json())
      .then((data) => setWeather(data.data));

    fetch(`${BASE}/v2/60s`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🌐 60s 工具站</h1>

      <section className="p-4 border rounded-lg shadow bg-white">
        <h2 className="font-semibold mb-2">🎲 随机答案</h2>
        {answer ? (
          <p>
            {answer.answer} ({answer.answer_en})
          </p>
        ) : (
          <p>加载中...</p>
        )}
      </section>

      <section className="p-4 border rounded-lg shadow bg-white">
        <h2 className="font-semibold mb-2">🌤️ 天气（北京）</h2>
        {weather ? (
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(weather, null, 2)}
          </pre>
        ) : (
          <p>加载中...</p>
        )}
      </section>

      <section className="p-4 border rounded-lg shadow bg-white">
        <h2 className="font-semibold mb-2">📰 今日新闻</h2>
        {news ? (
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(news, null, 2)}
          </pre>
        ) : (
          <p>加载中...</p>
        )}
      </section>
    </div>
  );
}
