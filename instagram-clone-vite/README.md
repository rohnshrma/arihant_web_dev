# Instagram Clone - Modern React App

A beautiful Instagram clone built with **React 18**, **Vite**, and modern **ES6+ syntax**, featuring a responsive design and interactive features.

## 🚀 Modern Tech Stack

- **React 18** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **ES6+ Syntax** - Modern JavaScript features
- **CSS Custom Properties** - Modern CSS with variables
- **Responsive Design** - Mobile-first approach

## ✨ Features

### ✅ Assessment Requirements
- **Navigation Bar** - Sticky navigation with Instagram logo and search
- **Image Cards** - Responsive post cards with user avatars
- **Icons** - Interactive icons for likes, comments, share, save
- **Comments/Title/Description** - Full post information display
- **Footer** - Comprehensive footer with relevant links
- **Stub Data** - Rich sample data for all features

### 🎨 Modern Features
- **ES6 Arrow Functions** - Clean, modern syntax
- **Destructuring** - Efficient data handling
- **Template Literals** - Modern string interpolation
- **CSS Custom Properties** - Maintainable styling
- **Responsive Design** - Works on all devices
- **Interactive Animations** - Smooth hover effects and transitions
- **Modern State Management** - React hooks with functional updates

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Quick Start

1. **Navigate to project directory**
   ```bash
   cd instagram-clone-vite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Hot Module Replacement (HMR) enabled for instant updates

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
instagram-clone-vite/
├── public/                 # Static assets
├── src/
│   ├── App.jsx            # Main component (ES6 syntax)
│   ├── App.css            # Modern CSS with variables
│   ├── main.jsx           # React 18 entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🎯 Modern ES6+ Features Used

### Arrow Functions
```javascript
const App = () => {
  const handleLike = (postId) => {
    setLikedPosts(prev => new Set([...prev, postId]))
  }
}
```

### Destructuring
```javascript
const renderPost = ({ id, username, userImage, image, likes, caption, comments, timestamp }) => (
  // Component JSX
)
```

### Template Literals
```javascript
const className = `like-btn ${likedPosts.has(id) ? 'liked' : ''}`
```

### Modern State Management
```javascript
const [likedPosts, setLikedPosts] = useState(new Set())

// Functional updates
setLikedPosts(prevLikedPosts => {
  const newLikedPosts = new Set(prevLikedPosts)
  newLikedPosts.has(postId) 
    ? newLikedPosts.delete(postId) 
    : newLikedPosts.add(postId)
  return newLikedPosts
})
```

### Array Methods
```javascript
{posts.map(renderPost)}
{footerLinks.map(link => (
  <a key={link} href="#">{link}</a>
))}
```

## 🎨 Modern CSS Features

### CSS Custom Properties
```css
:root {
  --primary-color: #0095f6;
  --text-primary: #262626;
  --border-color: #dbdbdb;
  --transition: all 0.2s ease;
}
```

### Modern Layout
```css
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

### Responsive Design
```css
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }
}
```

## 🔧 Key Components

### Navigation
- Instagram gradient logo
- Search functionality
- Action icons with hover effects
- Sticky positioning with backdrop blur

### Stories Section
- Horizontal scrollable stories
- Gradient borders around avatars
- Smooth hover animations

### Posts
- Interactive like buttons with heart animation
- Comment system
- Responsive images with hover effects
- Modern card design with shadows

### Sidebar
- User profile section
- Suggestions with follow buttons
- Responsive layout

### Footer
- Multiple link categories
- Professional layout
- Hover effects

## 📱 Responsive Design

The app is fully responsive and works perfectly on:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## ⚡ Performance Features

- **Vite HMR** - Instant hot reload
- **Optimized Images** - From Unsplash CDN
- **CSS Custom Properties** - Efficient styling
- **Modern JavaScript** - Better performance
- **Responsive Images** - Optimized for all devices

## 🎓 Assessment Submission

### 1. Single Page Web Application ✅
- Complete React project with all linking files
- Modern Vite build system
- ES6+ syntax throughout

### 2. Sandbox Link
- Upload to CodeSandbox, StackBlitz, or similar
- All modern features preserved
- Fast development experience

### 3. Screencast Presentation (5 minutes)

**Structure:**
1. **Project Overview** (30s)
   - Modern tech stack (React 18, Vite, ES6+)
   - Instagram clone with modern features

2. **Feature Demonstration** (3m)
   - Navigation and search functionality
   - Stories section with horizontal scroll
   - Post interactions (likes, comments)
   - Responsive design demonstration
   - Sidebar with suggestions

3. **Code Walkthrough** (1m)
   - ES6+ features (arrow functions, destructuring)
   - Modern state management
   - CSS custom properties
   - Component structure

4. **Technical Highlights** (30s)
   - Vite's fast development experience
   - Modern React patterns
   - Responsive design principles

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Customization

### Adding More Posts
```javascript
const [posts] = useState([
  {
    id: 4,
    username: 'new_user',
    userImage: 'image_url',
    image: 'post_image_url',
    likes: 500,
    caption: 'Your caption here',
    comments: [
      { id: 1, username: 'commenter', text: 'Great post!' }
    ],
    timestamp: '1 hour ago'
  }
])
```

### Styling Changes
```css
:root {
  --primary-color: #your-color;
  --border-radius: 12px;
}
```

## 🌟 Modern Features Highlight

- **ES6+ Syntax** - Arrow functions, destructuring, template literals
- **React 18** - Latest React features and concurrent rendering
- **Vite** - Lightning-fast development experience
- **CSS Custom Properties** - Maintainable and scalable styling
- **Responsive Design** - Mobile-first approach
- **Interactive Animations** - Smooth transitions and hover effects

## 📄 License

This project is created for educational purposes as part of a college assessment.

---

**Built with ❤️ using React 18, Vite, and modern ES6+ syntax**
