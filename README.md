Translator

# Secondary school of electrotechnical engineering Jecna 30
# 2022-2023
# Matěj Šturma
# C4c

This is a TCP/IP Peer2Peer translator written in Node.js.

Prerequisites

    1. Node.js (https://nodejs.org/en/)

Installation

    1. Clone the repository: git clone https://github.com/CutoNaito/Translator.git
    2. Install dependencies: `npm install`

Configuration

    If you got this software from a git repository:
    1. Create a file named `.env` in the root directory of the project.
    2. Add the following lines to the file:
        PORT={your desired port number}
        HOST={your ip address}
        IPV4_START={the first ip address of the range}
        IPV4_END={the last ip address of the range}
        PORT_START={the first port number of the range}
        PORT_END={the last port number of the range}

    If you got this software from a zip file:
    1. Open the .env file in the root directory of the project.
    2. Change the values of the variables to your desired values.

Usage

To start the server, run `npm run server`. By default, the server will listen on port 8000.

Server Commands

    1. `TRANSLATEPING` - Looks for another similar server running on the configured address. If found, returns `TRANSLATEPONG"Connection successful"`
    2. `TRANSLATELOCL"{word}"` - Looks for a translation of the word in the local dictionary. If found, returns `TRANSLATEDSUC"{translation}"`
    3. `TRANSLATESCAN"{word}"` - Scans the configured range of IP addresses and port numbers for a server that can translate the word. If found, returns `TRANSLATEDSUC"{translation}"`