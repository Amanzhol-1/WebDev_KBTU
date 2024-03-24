n = int(input())
s = [int(i) for i in input().split()]
k = 0
for i in range(len(s)-1):
    if s[i] < s[i+1]:
        k+=1
print(k)