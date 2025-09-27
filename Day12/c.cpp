#include<iostream>
#include<math.h>
using namespace std;
int main(){
    int num,amg,result=0,original;
    cout<<"Enter the number : ";
    cin>>num;
    original = num;
        while(num != 0){
            amg = num % 10;
            result = result + (amg*amg*amg);
            num = num/10;
        }
    if (result == original){

        cout << original << " is an Armstrong number." << endl;
    }
    else{

        cout << original << " is NOT an Armstrong number." << endl;
    }

    return 0;
}

