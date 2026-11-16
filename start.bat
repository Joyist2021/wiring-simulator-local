@echo off
cd /d "%~dp0"
echo Starting local wiring simulator on http://127.0.0.1:8080/wiring-simulator
python server.py 8080
pause
