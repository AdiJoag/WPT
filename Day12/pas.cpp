#include <iostream>
using namespace std;
int main()
{

    int i, j, a[5][5];

    for (i = 0; i < 5; i++)
    {
        for (j = 0; j <= i; j++)
        {
            if (j == 0 || i == j)
            {
                a[i][j] = 1;
            }
            else
            {
                a[i][j] = a[i - 1][j - 1] + a[i - 1][j];
            }
        }
    }
    for (i = 0; i < 5; i++)
    {

        for (j = 0; j < 5; j++)
        {
            cout << " ";
        }
        for (j = 0; j <= ; j++)
        {
            cout << a[i][j];
            cout << " ";
        }
        cout << "\n";
    }
}
Demo *ptr;
ptr = &a;
ptr->display();