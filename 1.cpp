#include <iostream>
#include <map>
#include <vector>
#include <numeric>
#include <algorithm>

using namespace std;

int main(){
    string name;
    cout<<"Enter your name : ";
    getline(cin, name);  //name of the student 
    string study;
    cout<<"Field of Study : ";
    getline(cin, study);   //name of the field
    vector<int>Grades;
    float average;    //get the average
    map<string , int> Mine;  //storage
    int Grade;
    cout<<"Type 'DONE' when you're done listing your courses"<<endl;
    string course = " ";   //course initialization
    while(course != "DONE"){
        cout<<"course :";
        getline(cin , course);   //courses
        transform(course.begin(), course.end(),course.begin(), ::toupper);
        if(course == "DONE"){    //stopping condition
            break;
        }
        else{
        cout<<"Grade : ";    //grades
        cin>>Grade;
        if(Grade < 0 || Grade > 100){   //prevent wrong grades
            break;
        }
        else{
        Grades.push_back(Grade);
        }
        string dummy;
        getline(cin, dummy);
        Mine[course] = Grade; 
        }
    }
    float total = accumulate(Grades.begin(), Grades.end(),0);
    average = total / Grades.size();
    cout<<endl;
    //print the results

    cout<<"----TRANSCRIPT---"<<endl;  
    cout<<"Student : "<<name<<endl;
    cout<<"Study : "<<study<<endl;
    cout<<endl;
    cout<<"COURSES : "<<endl;
    for(const auto &pair : Mine){
        cout <<pair.first <<" : "<< pair.second <<"%"<<endl;
    }
    cout<<endl;
    cout<<"Student Average : "<<average<<endl;
    if(average >= 95){
        cout<<"Comment : Passed with Distinction"<<endl;
        cout<<"Additional : In the Dean's List"<<endl;
    }
    else if(average >= 75){
        cout<<"Comment : Passed with Distinction"<<endl;
    }
    else if(average >= 50){
        cout<<"Comment : Passed "<<endl;
    }
    else{
        cout<<"Comment : Failed"<<endl;
    }
    return 0;
}