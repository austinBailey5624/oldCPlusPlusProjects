/**
*	@file: 		main.cpp
*	@author:	Austin Bailey
*	@date:		2.5.2015
*	@purpose:	Space for the utilization fo the Node and LinkedList classes
*/

#include <iostream>
#include <string>
#include "Node.h"
#include "LinkedList.h"

int main()
{
	LinkedList list;
	bool exit=false;
	int choice;
	int tempi;
	bool tempb;
	while(!exit)
	{
		std::cout << "\n\n\nSelect from the following menu:\n"
			<< "1) Add to the front of the list\n"
			<< "2) Add to the end of the list\n"
			<< "3) Remove from the front of the list\n"
			<< "4) Remove from the back of the list\n"
			<< "5) Print the list\n"
			<< "6) Search for value\n"
			<< "7) Exit\n"
			<< "Enter your choice: ";
		std::cin >> choice;

		if(choice==1)
		{
			std::cout<<"Input a value to add: Adding ";
			std::cin>> tempi;
			std::cout<<" to the list";
			list.addFront(tempi);
		}
		else if(choice==2)
		{
			std::cout<<"Input a value to add: Adding ";
			std::cin>>tempi;
			std::cout<<" to the list";
			list.addBack(tempi);
		}
		else if(choice==3)
		{
			std::cout<<"Attempting removal from front of list.\n";
			tempb=list.removeFront();
			if(tempb)
			{
				std::cout<<"Removal successful";	
			}
			else
			{
				std::cout<<"There are no values to remove";
			}			
		}
		else if(choice==4)
		{
			std::cout<<"Attempting removal from back of list.\n";
			tempb=list.removeBack();
			if(tempb)
			{
				std::cout<<"Removal successful";
			}
			else
			{
				std::cout<<"There are no values to remove";
			}
		}
		else if(choice==5)
		{
			std::cout<<"Printing List:\n";
			list.printList();
		}
		else if(choice==6)
		{
			std::cout<<"Enter a value to search for: Searching for: ";
			std::cin>>tempi;
			std::cout<<"...";
			tempb=list.search(tempi);
			if(tempb)
			{
				std::cout<<tempi<<" is in the list.";
			}
			else
			{
				std::cout<<tempi<<" is not in the list.";
			}
		}
		else if(choice==7)
		{
		//~Linked List goes here
		exit=true;
		}
		else
		{
			std::cout<<"Invalid Choice";
		}
	}
return 0;
}; 

