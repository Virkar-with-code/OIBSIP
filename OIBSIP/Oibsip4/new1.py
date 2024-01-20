#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      virka
#
# Created:     15-01-2024
# Copyright:   (c) virka 2024
# Licence:     <your licence>
#-------------------------------------------------------------------------------

import bcrypt


users = {}

def register_user():
    username = input("Enter your username: ")


    if username in users:
        print("Username already exists. Please choose a different one.")
        return

    password = input("Enter your password: ")


    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


    users[username] = {
        'hashed_password': hashed_password
    }

    print("Registration successful!")

def login_user():
    username = input("Enter your username: ")


    if username not in users:
        print("Invalid username. Please register first.")
        return

    password = input("Enter your password: ")


    if bcrypt.checkpw(password.encode('utf-8'), users[username]['hashed_password']):
        print("Login successful! Welcome, {}.".format(username))

        access_secured_page()
    else:
        print("This is Incorrect password. Please try again.")

def access_secured_page():
    print("This is the secured page. Only authenticated users can access this.")


while True:
    print("\n1. Register\n2. Login\n3. Exit")
    choice = input("Choose an option (1/2/3): ")

    if choice == '1':
        register_user()
    elif choice == '2':
        login_user()
    elif choice == '3':
        print("Program is existing")
        break
    else:
        print("This is a Invalid choice. Please enter 1, 2, or 3.")