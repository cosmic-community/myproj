const fs = require('fs');
const path = require('path');

const buildDir = path.join(process.cwd(), '.next', 'server', 'app');
const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture.js')) {
    return;
  }
  
  const headEndIndex = content.indexOf('</head>');
  if (headEndIndex !== -1) {
    content = content.slice(0, headEndIndex) + scriptTag + content.slice(headEndIndex);
    fs.writeFileSync(filePath, content);
    console.log(`Injected console capture script into ${filePath}`);
  }
}

function processDirectory(directory) {
  if (!fs.existsSync(directory)) {
    return;
  }
  
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

processDirectory(buildDir);
console.log('Console capture script injection complete');