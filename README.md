# Ramada Websites Project

A collection of 7 unique website templates with consistent two-column layouts and image galleries.

## Project Structure

```
my-new-app/
src/app/
  ramada1.js    # White/Blue/Green theme
  ramada2.js    # Gray/Purple/Orange theme  
  ramada3.js    # Blue/Indigo/Cyan theme
  ramada4.js    # Green/Emerald/Teal theme
  ramada5.js    # Purple/Violet/Fuchsia theme
  ramada6.js    # Yellow/Amber/Lime theme
  ramada7.js    # Red/Rose/Pink theme
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Accessing Each Ramada Website

- **Ramada 1**: http://localhost:3000/ramada1
- **Ramada 2**: http://localhost:3000/ramada2
- **Ramada 3**: http://localhost:3000/ramada3
- **Ramada 4**: http://localhost:3000/ramada4
- **Ramada 5**: http://localhost:3000/ramada5
- **Ramada 6**: http://localhost:3000/ramada6
- **Ramada 7**: http://localhost:3000/ramada7

## Layout Features

Each ramada website includes:

### Left Column - Image Gallery
- 3 equal columns grid layout
- 12 square image placeholders
- 320px fixed width
- Gray background with border

### Right Column - Content Areas
- 2 rows × 2 columns layout
- Responsive grid with gaps
- Flexible width
- Unique color themes per website

## Technologies Used

- **Next.js 16.2.4** - React framework
- **React 19.2.4** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ESLint** - Code quality

## Customization

### Adding Images
Replace the placeholder divs with actual images:

```jsx
<img 
  src="/path/to/image.jpg" 
  alt="Description" 
  className="w-full h-full object-cover rounded"
/>
```

### Changing Colors
Modify the Tailwind classes in each ramada file to customize themes.

### Adding Content
Each content area can be customized with any React components.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

MIT
