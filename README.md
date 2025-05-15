# 🌤️ Weatherly

**Weatherly** — это минималистичное погодное приложение, разработанное с использованием современных технологий фронтенда. Оно позволяет пользователю искать текущую погоду и почасовой прогноз по выбранному городу.

## 🔧 Технологии

- ⚛️ [React 19](https://react.dev/)
- 🧑‍💻 [TypeScript](https://www.typescriptlang.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🌐 [WeatherAPI](https://www.weatherapi.com/)
- 🌈 [Lucide Icons](https://lucide.dev/)

## 📸 Скриншоты

![Пример интерфейса](./src/assets/screenshot.png)

## 🚀 Запуск проекта

Убедитесь, что у вас установлен **Node.js** (рекомендуется последняя LTS-версия).

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Khabalov33/weatherly.git
cd weatherly
```

2. Установите зависимости:

```bash
npm install
```

3. Создайте `.env` файл и добавьте ваш ключ API от WeatherAPI:

```
REACT_APP_WEATHER_API_KEY=ваш_API
```

4. Запустите проект в режиме разработки:

```bash
npm run dev
```

5. Для сборки production-версии:

```bash
npm run build
```

6. Для предпросмотра production-версии:

```bash
npm run preview
```

## 📁 Структура проекта

```
Weatherly/
├── public/                 # Статические ресурсы
├── src/
│   ├── components/         # WeatherCard и WeatherCardHour
│   ├── assets/             # Иконки и изображения
│   ├── types/              # Типы TypeScript
│   ├── utils/              # Вспомогательные функции (getIcons)
│   ├── App.tsx             # Главный компонент
│   └── main.tsx            # Точка входа
├── .env                    # Переменные окружения (не включены)
├── vite.config.ts          # Конфигурация Vite
├── tailwind.config.js      # Конфигурация Tailwind CSS
```

## 🧠 Особенности

- Поиск города и отображение погоды
- Поддержка почасового прогноза
- Отображение иконок погоды в зависимости от условий
- Обработка загрузки и ошибок
- Адаптивный и минималистичный дизайн

---

С любовью к чистому коду 💙
