Template for future projects using electron as a basis. Setup guide
  1. npm i
  2. turn on typescript watch mode
  3. npm run build to start webpack in watch mode
  4. npm run start

Place ui pages into the ui-pages folder and define them as shown in StartPage. Only page classes should be exported in this folder. All pages will be dynamically included in the page router. 

Images cannot be imported directly from the public directory. Use process.env.PUBLIC_URL + '/img/logo.png' style for src.
