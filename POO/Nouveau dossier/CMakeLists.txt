cmake_minimum_required(VERSION 3.26)
project(Nouveau_dossier)

set(CMAKE_CXX_STANDARD 14)

add_executable(Nouveau_dossier
        Pays/bin/TP_Pays.cpp
        Pays/main.cpp
        Sudoku/CheckComplete.c
        Sudoku/CheckValid.c
        Sudoku/main.c)
