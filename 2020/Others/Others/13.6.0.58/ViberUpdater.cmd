@echo off

SETLOCAL ENABLEEXTENSIONS

set log_path=%~n0.cmd.log
set update_version=
set name=updater.exe
set script_path=%~dp0
set script_drive=%~d0


:next_cmd
	IF "%1"=="" (goto :end_cmd) 
	IF "%1"=="--update-version" (SET update_version=%2) 
	IF "%1"=="--force" del /F /Q "%script_path%%log_path%" 2>nul 1>nul
shift 
goto  :next_cmd
:end_cmd

if not defined update_version (
    echo Update failed: Incorrect command line>%~dp0\error.log
    exit 0
)
%script_drive%  >nul
cd %script_path% > nul 

IF NOT '%ERRORLEVEL%'=='0' (
    echo Update failed: Incorrect update path > error.log
    exit 1
)

del /F /Q error.log 2>nul 1>nul


if exist %log_path% (
    echo Update failed: Update has been alredy executed > error.log
    exit 2
)


echo Update has been started  >> %log_path%
echo Script path: %script_path% >> %log_path%
echo Version: %update_version% >> %log_path%

if not exist %update_version%\%name% goto :error

echo Checking  path  %update_version%\%name% >> %log_path%

if not exist %update_version%\data if not exist %update_version%\pack.exe  goto :error

echo Starting  %update_version%\%name% >> %log_path%
%update_version%\%name% --cmd=update --show --force >> %log_path% 

IF NOT '%ERRORLEVEL%'=='0' if not exist error.log (
    echo Update failed: process %name% returns %ERRORLEVEL% > error.log
    exit 1
)

echo Detaching... >> %log_path%
exit 0

:error
echo Update failed: Incorect package structure> error.log
exit -1

