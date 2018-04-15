rtl_433_accumulate
==================

Remembers the latest value per sensor and makes them available via HTTP

Install
-------
Make sure you have NodeJS and NON installed. Then clone the repo, cd into the directory and run:
    npm install
to install the dependencies.

How to run
----------
Just pipe the JSON-formatted input of merbanan/rtl_433 into this script:
    rtl_433 -F json -C si |  ~/git/rtl_433_accumulate/index.js

The webserver will be available on 127.0.0.1:3005 by default. This can be changed using the environment Variables HOST and PORT
