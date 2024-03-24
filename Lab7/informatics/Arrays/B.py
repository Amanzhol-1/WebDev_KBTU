n = int(input())
s = [int(i) for i in input().split()]
l = ""
for i in s:
    if i % 2 == 0:
        l += str(i) + " "
print(l)