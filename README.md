# Get Roasted

A fun internal app for UX teams to upload their designs and get hilariously honest (but constructive) feedback from teammates. Built with React for maximum team bonding through creative criticism!

## Features ✨

- **Drag & Drop Upload**: Easy image upload with support for JPG, PNG, GIF, SVG files
- **AI-Powered Roasts**: Funny but constructive design critiques that help improve your work
- **Design Gallery**: View all uploaded designs and their roasts in a beautiful grid layout
- **Local Storage**: All designs and roasts are saved locally in your browser
- **Export Data**: Download all your designs and roasts as JSON
- **Responsive Design**: Works great on desktop and mobile devices
- **Team Stats**: Track total designs uploaded and roasts generated

## Getting Started 🚀

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

That's it! Start uploading your designs and get roasted!

## How to Use 📖

1. **Upload a Design**: Drag and drop your design files onto the upload zone or click to browse
2. **Get Roasted**: Click the "Roast This Design!" button to generate a funny critique
3. **Re-roast**: Don't like the roast? Click the refresh button to get a new one
4. **Share & Laugh**: Share the roasts with your team and enjoy the constructive feedback
5. **Export**: Download all your designs and roasts for future reference

## Built With 🛠️

- **React 18** - Frontend framework
- **React Dropzone** - File upload functionality
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with gradients and animations
- **Local Storage** - Data persistence

## Team Guidelines 🤝

This app is designed for internal team fun! Remember:
- All roasts are meant to be constructive and fun
- We roast because we care about improving our designs
- Keep the feedback light-hearted and supportive
- Use this as a learning opportunity and team bonding experience

## File Structure 📁

```
src/
├── components/
│   ├── UploadZone.js      # Drag & drop upload component
│   ├── UploadZone.css     # Upload zone styling
│   ├── DesignCard.js      # Individual design card component
│   └── DesignCard.css     # Design card styling
├── roastGenerator.js      # Roast generation logic
├── App.js                 # Main application component
├── App.css               # Main application styling
├── index.js              # React entry point
└── index.css             # Global styles
```

## Contributing 🤗

Want to add more roasts or improve the app? Feel free to:
- Add new roast messages in `src/roastGenerator.js`
- Improve the UI/UX
- Add new features like team member attribution
- Enhance the roast algorithm

## License 📄

This project is built for internal team use. Have fun and roast responsibly! 😄

---

Made with love and a healthy dose of constructive criticism for the UX team
