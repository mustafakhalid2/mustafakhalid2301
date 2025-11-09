tailwind.config.js

 module.exports = {
 darkMode:'class',
 content: [
  './dark-mode.html', // <--- Make sure your specific file is listed!
    './*.html',         // <--- Or a wildcard that covers it
    //... any other file paths
//     // This array must contain the paths to all of your HTML files
//      // so Tailwind knows which classes to look for and include.
//      './*.html', 
  ],

 theme: {
                extend: {
                    
                    screens: {
                        'sm': '700px',
                        'md': '900px',
                        'lg': '1000px',
                        'big': '1300px',
                    },
                    // 2. CONFIGURE DEFAULT FONT FAMILY
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                    },
                }
            }
        }
  plugins: [],
{}