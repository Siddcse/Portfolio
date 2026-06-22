# Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features include an interactive UI, contact form with MongoDB integration, and showcase of skills and projects.

## Features

- 🎨 **Modern Design** - Clean and responsive interface with Tailwind CSS
- 📱 **Mobile Responsive** - Fully optimized for all device sizes
- 💬 **Contact Form** - Integrated contact functionality with MongoDB backend
- 🎯 **Hero Section** - Eye-catching landing area
- 📚 **Projects Showcase** - Display your best work
- 🛠️ **Skills Section** - Highlight your technical expertise
- 📧 **API Integration** - RESTful API for form submissions
- ⚡ **Fast Performance** - Built with Next.js for optimal speed

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB
- **Styling:** Tailwind CSS, PostCSS
- **Linting:** ESLint

## Project Structure

```
├── app/                      # Next.js app directory
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── lib/
│   └── mongodb.ts            # MongoDB connection utility
├── models/
│   └── Contact.ts            # MongoDB Contact schema
├── public/                   # Static assets
└── package.json
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Siddcse/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```


## Development

Run the development server:
```bash
npm run dev
```

Open (https://portfolio-beige-iota-leb5f65q05.vercel.app) in your browser to see the portfolio.

## Building for Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## API Endpoints

- **POST** `/api/contact` - Submit a contact form

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Getting Started

1. Update the components with your personal information
2. Add your projects to the Projects section
3. Customize the skills list
4. Update the contact form with your email
5. Deploy to your preferred hosting platform

## Deployment

This project can be easily deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS
- Google Cloud
- Other Node.js hosting platforms

## Contact

For more information or inquiries, please use the contact form on the portfolio website.

## License

This project is open source and available under the MIT License.

---

Built with ❤️ by Siddharth
