#include<iostream>
using namespace std;
int main(){
    char str1[20] = "hello";
    char str2[] = "world";
    
    char* p1 = str1;
    char* p2 = str2;
    while(*p1 != '\0'){
        p1++;
    }
    while(*p2!='\0'){
        *p1 = *p2;
        *p2++;
        *p1++;
    }
    cout<<str1;
}