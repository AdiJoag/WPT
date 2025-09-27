#include<iostream>
using namespace std;
int main(){
    int n,second=-1;
    cout<<"The number of elements are : ";
    cin>>n;

    int a[n];
    cout<<"the elements are : ";
    for(int i = 0;i<n;i++){
        cin>>a[i];
    }
   
    cout<<"The max is : ";
    int max = a[0];
    for(int i = 0 ;i < n; i++){
        if(max<a[i]){
            second = max;
            max = a[i];
        }
    }
   // cout<<max;
    for(int i = 0;i<n;i++){

        if(max<a[i] &&  a[i]>second){
            second = a[i];
        }
    }
    cout<<second;
}