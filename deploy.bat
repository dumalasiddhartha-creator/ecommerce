@echo off
echo ========================================
echo   Siddhartha Store - Deployment Script
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
node --version
npm --version
echo.

REM Install dependencies
echo [1/4] Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [✓] Dependencies installed
echo.

REM Build project
echo [2/4] Building project...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed
    pause
    exit /b 1
)
echo [✓] Build successful
echo.

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [3/4] Installing Vercel CLI...
    call npm install -g vercel
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install Vercel CLI
        pause
        exit /b 1
    )
) else (
    echo [3/4] Vercel CLI is already installed
)
echo.

REM Deploy to Vercel
echo [4/4] Deploying to Vercel...
echo.
echo Please login to Vercel when prompted...
echo.
call vercel --prod
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Deployment failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo   ✅ Deployment Complete!
echo ========================================
echo.
echo Your store is now live!
echo Check the URL above.
echo.
pause

