@echo off
REM Quick Fix for ENOENT Error
REM This script ensures you're in the correct directory

echo ========================================
echo   Fixing ENOENT Error
echo ========================================
echo.

REM Change to script directory (where package.json is)
cd /d "%~dp0"

echo Current directory:
cd
echo.

echo Checking for package.json...
if exist "package.json" (
    echo [✓] package.json found!
    echo.
    echo You can now run:
    echo   npm install
    echo   npm run dev
    echo.
) else (
    echo [ERROR] package.json not found!
    echo Please make sure you're in the ecommerce folder.
    echo.
)

pause

