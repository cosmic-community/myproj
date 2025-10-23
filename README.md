# 📖 Вера в Священные Книги: Коран

![App Preview](https://imgix.cosmicjs.com/81ea9620-b012-11f0-91fb-4f0a74e7f402-photo-1585779034823-7e9ac8faec70-1761225396451.jpg?w=1200&h=300&fit=crop&auto=format,compress)

Интерактивная образовательная платформа о Коране и священных книгах в исламе на русском языке. Современный веб-сайт с полной информацией о Коране, интерактивными элементами и мультимедийными ресурсами.

## ✨ Features

- 📚 **Образовательные Главы** - Подробные статьи о Коране с интерактивными элементами
- 🎯 **Викторины и Тесты** - Проверка знаний с мгновенной обратной связью
- 🎬 **Мультимедийная Библиотека** - Видео, аудио и документы для изучения
- ❓ **База Знаний FAQ** - Ответы на часто задаваемые вопросы
- 💬 **Коранические Цитаты** - Аяты на арабском и русском языках
- 🏷️ **Категоризация** - Организованный контент по темам
- 🔍 **Поиск** - Быстрый поиск по всему сайту
- 📱 **Адаптивный Дизайн** - Оптимизирован для всех устройств
- 🎨 **Современный UI** - Элегантный дизайн с арабскими мотивами

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68fa27b592c9229c30fe0da1&clone_repository=68fa2c1092c9229c30fe0df2)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "create a website for independent work about Вера в священные книги "Коран" in Russian language. it must contain all information about the topic. do it maximum interactive"

### Code Generation Prompt

> Based on the content model I created for "create a website for independent work about Вера в священные книги "Коран" in Russian language. it must contain all information about the topic. do it maximum interactive", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Lucide Icons** - Beautiful icon library
- **Inter Font** - Modern typography

## 📋 Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket access
- Git for version control

## 🚀 Getting Started

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd quran-education-platform
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. **Run the development server**
```bash
bun run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Cosmic SDK Examples

### Fetching Chapters with Related Content

```typescript
// Fetch chapters with related categories using depth parameter
const response = await cosmic.objects
  .find({
    type: 'chapters'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Automatically loads related category objects

// Access related category directly
const chapters = response.objects
chapters.forEach(chapter => {
  console.log(chapter.metadata.category.title) // Direct access!
})
```

### Fetching Resources by Type

```typescript
// Filter resources by type
const response = await cosmic.objects
  .find({
    type: 'resources',
    'metadata.resource_type.key': 'video' // Filter by select-dropdown key
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)

const videos = response.objects
```

### Fetching Popular FAQs

```typescript
// Fetch popular FAQs with categories
const response = await cosmic.objects
  .find({
    type: 'faq',
    'metadata.popular': true // Filter by switch field
  })
  .props(['id', 'title', 'metadata'])
  .depth(1) // Loads related category

const popularFaqs = response.objects
```

## 🎨 Cosmic CMS Integration

### Content Types

1. **Chapters (chapters)**
   - Main educational content
   - HTML content with images
   - Interactive elements (JSON)
   - Related categories
   - Featured flag
   - Audio files

2. **Categories (categories)**
   - Organization structure
   - Emoji icons
   - Color coding
   - Descriptions

3. **Quotes (quotes)**
   - Arabic text
   - Russian translation
   - Surah and Ayah references
   - Related chapters
   - Audio pronunciation

4. **FAQ (faq)**
   - Questions and answers
   - HTML-formatted answers
   - Category relationships
   - Popular flag

5. **Resources (resources)**
   - Multiple types (video, audio, document, link)
   - Thumbnails
   - URLs and media files
   - Category relationships

### Key Features

- **Depth Parameter**: Use `depth(1)` to automatically load related objects
- **Select-Dropdown Values**: Use exact keys from content model (e.g., 'video', 'audio')
- **Object Relationships**: Access related objects directly via `metadata.category`
- **Empty Results Handling**: Properly handles 404 responses with try/catch
- **Type Safety**: Full TypeScript interfaces for all content types

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Make sure to set these in your deployment platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 📱 Features Overview

### Home Page
- Featured chapters showcase
- Interactive statistics
- Latest quotes
- Quick navigation

### Chapters
- Detailed educational content
- Interactive elements (quizzes, statistics)
- Audio support
- Related content
- Category filtering

### Resources Library
- Filter by type (video, audio, document, link)
- Thumbnail previews
- Direct links to resources
- Category organization

### FAQ Section
- Searchable questions
- Category filtering
- Popular questions highlight
- HTML-formatted answers

### Quotes
- Arabic text with Russian translation
- Surah and Ayah references
- Related chapter links
- Audio pronunciation support

## 🎯 Interactive Features

1. **Quizzes** - Test knowledge with interactive quizzes in chapters
2. **Statistics** - Visual representation of Quran facts
3. **Audio Integration** - Listen to Quranic recitations
4. **Search** - Find content across all sections
5. **Filtering** - Filter resources and FAQ by categories
6. **Responsive Design** - Works perfectly on all devices

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please contact through the Cosmic community or open an issue in the repository.

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com) and Next.js 15

<!-- README_END -->