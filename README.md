==============================================================
April 15th 2020

This program is designed to compliment a Command Line "game" that was written in C++, as part of my Udemy C++ Unreal course. The Github repo is called "001_CppUnreal-Udemy-tripleX".

I thought that it would be a good simple exercise to practice both some problem solving skills as well as Javascript to make a simple we page that acts as a tool for the tripleX game.

The idea is that since the difficulty of tripleX spikes rather quickly, this tool could take in the door level (which the difficulty is literally based on), the SUM of the three codes, and the PRODUCT of the three codes. This page would then run a series of calculations and return the three values for the door.

+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
Progress to this point:
+ Initialized the repo.
+ Created this README file.
+ Added three fields; one for the door level, one for the SUM, and one for the PRODUCT.
+ Added a button to run the program.
+ Added various console logs to document the running processes.


+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

The program DID successfully generate the sum at one point. After I altered it to also match the product before finalizing the values, the loops ran infinitely.

I will most likely scrap the current method since nested loops are VERY inefficient and clearly the increasing time and compute requirements are not acceptable once the number of factors grows beyond a few values.

==============================================================