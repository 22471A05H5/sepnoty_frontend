# MindCare - AI Wellness Companion

A beautiful mental health assessment application with personalized AI recommendations.

## Getting Started in VS Code

### Prerequisites
- Node.js (version 16 or higher)
- VS Code
- Git (optional)

### Setup Commands

1. **Open Terminal in VS Code** (Ctrl+` or View > Terminal)

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - The app will automatically open at `http://localhost:5173`
   - Or click the link shown in the terminal

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Main page components
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── services/           # API services
```

### Features

- **Beautiful Dark Theme** - Black background with pink, sky blue, and orange accents
- **Multi-step Assessment** - Comprehensive questionnaire for personalized recommendations
- **AI-Powered Recommendations** - Three types: Meditation, Talk to a Friend, Consult a Therapist
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Enhanced user experience with transitions

### Color Scheme

- **Background**: Black (`bg-black`)
- **Cards/Panels**: Dark gray (`bg-gray-900`, `bg-gray-800`)
- **Primary Buttons**: Pink gradients (`from-pink-500 to-sky-500`)
- **Secondary Buttons**: Sky blue to orange (`from-sky-500 to-orange-500`)
- **Text**: White and gray variants
- **Accents**: Pink, sky blue, orange

### Development Notes

- Built with React 18 + TypeScript
- Styled with Tailwind CSS
- Icons from Lucide React
- Routing with React Router DOM
- Ready for AI model integration

### Next Steps

1. Run the commands above to start development
2. The app will be available at `http://localhost:5173`
3. Make changes to see live updates
4. When ready, integrate your custom AI model by updating `src/utils/aiRecommendation.ts`