/**
*     @file       Heap.h
*     @author     Austin bailey
*     @date       9/27/2016
*/

#ifndef HEAP_H
#define HEAP_H
#include <iostream>
#include <fstream>
class Heap
{
public:
      Heap(int size);
      ~Heap();
      bool insert(int value);
      void upheap(int index);
      void downheap(int index);
      bool deletemin();
      bool deletemax();
      bool remove2(int value);
      void levelorder();
      bool search(int value);
private:
      int lastElementIndex;
      int m_size;
      int* content;
};
#endif