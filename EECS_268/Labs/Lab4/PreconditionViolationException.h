/**
*	@file: 		PreconditionViolationException.h
*	@author:	Austin Bailey
*	@date:		2.27.2015
*	@purpose:	Header file for the PreconditionViolationException class
*/ 
#ifndef PRECONDITIONVIOLATIONEXCEPTION_H
#define PRECONDITIONVIOLATIONEXCEPTION_H
#include <stdexcept>
class PreconditionViolationException: public std::runtime_error
{
	public:
		PreconditionViolationException();
//		PreconditionViolationException(const char* message);
};
#endif