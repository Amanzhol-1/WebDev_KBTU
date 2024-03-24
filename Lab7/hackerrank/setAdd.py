# Enter your code here. Read input from STDIN. Print output to STDOUT 
n=int(input()) 
set = set()   
for i in range(0,n): 
    a=input() 
    set.add(a) 
print(len(set))