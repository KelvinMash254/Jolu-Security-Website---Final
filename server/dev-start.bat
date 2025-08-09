@echo off
SET PORT=3020

echo Killing process on port %PORT%...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :%PORT% ^| findstr LISTENING') do (
    echo Found PID %%a using port %PORT%
    taskkill /PID %%a /F >nul 2>&1
)

echo Starting server...
npm run dev
