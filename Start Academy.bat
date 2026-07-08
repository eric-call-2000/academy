@echo off
rem ============================================================
rem  Academy - one-click launcher
rem  Double-click this file to start the platform in your browser.
rem ============================================================
cd /d "%~dp0"

rem Start the local server in a minimized window (leave it running while you study).
start "Academy server" /min node server.js

rem Give the server a moment to come up, then open the app.
timeout /t 2 /nobreak >nul
start "" http://localhost:5175

exit
