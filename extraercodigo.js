const fs = require('fs');
const path = require('path');

// Archivo de salida
const OUTPUT_FILE = 'archivos_con_codigo_simplificado.txt';

// Extensiones de archivos de código y texto
const ALLOWED_EXTENSIONS = [
    '.js', '.jsx', '.ts', '.tsx', ];

// Directorios a excluir (para evitar archivos innecesarios)
const EXCLUDED_DIRS = ['node_modules','.md', '.html', 
    '.css', '.scss', '.yaml', '.yml', '.php', '.sh', '.rb', '.xml', '.ini', '.env','.kt','.swift', 'build','.java', '.json','.txt', '.py', '.git', 'dist', 'coverage', 'bin',  '.lock', '.idea', '.vscode', 'public', 'assets', 'fonts', 'images', 'videos', 'sounds', 'docs', 'test', 'tests', 'spec', 'specs', 'snapshots', 'migrations', 'seeds', 'logs', 'tmp', 'temp', 'cache', 'data', 'uploads', 'downloads', 'backup', 'backups'];

// Función para verificar si el archivo es binario
const isBinaryFile = (filePath) => {
    const buffer = fs.readFileSync(filePath);
    for (let i = 0; i < buffer.length; i++) {
        if (buffer[i] === 0) return true; // Si encuentra un byte NULL, es binario
    }
    return false;
};

// Función para recorrer archivos recursivamente
const getAllFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            if (!EXCLUDED_DIRS.includes(file)) {
                results = results.concat(getAllFiles(filePath));
            }
        } else {
            const ext = path.extname(file);
            if (ALLOWED_EXTENSIONS.includes(ext) && !isBinaryFile(filePath)) {
                results.push(filePath);
            }
        }
    });

    return results;
};

// Función para extraer código y guardarlo en un archivo
const extractCode = () => {
    const files = getAllFiles(process.cwd()); // Carpeta donde se ejecuta el script

    fs.writeFileSync(OUTPUT_FILE, ''); // Reiniciar archivo

    files.forEach((file) => {
        try {
            const content = fs.readFileSync(file, 'utf8'); // Asegura lectura en UTF-8

            const fileHeader = `\n=====================================\nArchivo: ${file}\n=====================================\n`;

            fs.appendFileSync(OUTPUT_FILE, fileHeader);
            fs.appendFileSync(OUTPUT_FILE, content);
            fs.appendFileSync(OUTPUT_FILE, '\n\n');
        } catch (error) {
            console.warn(`⚠️ No se pudo leer: ${file}`);
        }
    });

    console.log(`✅ Código extraído en "${OUTPUT_FILE}"`);
};

// Ejecutar el script
extractCode();
