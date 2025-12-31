@echo off
echo ========================================
echo   Starting Siddhartha Store Dev Server
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Then restart this script.
    echo.
    pause
    exit /b 1
)

echo [✓] Node.js is installed
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [1/2] Installing dependencies (first time setup)...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install dependencies
        pause
        exit /b 1
    )
    echo [✓] Dependencies installed
    echo.
) else (
    echo [✓] Dependencies already installed
    echo.
)

REM Start dev server
echo [2/2] Starting development server...
echo.
echo ========================================
echo   Your store will be available at:
echo   http://localhost:3000
echo ========================================
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

