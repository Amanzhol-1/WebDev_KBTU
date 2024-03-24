n = int(input())
s = [int(i) for i in input().split()]
a = [s[i] for i in range(len(s)) if i % 2 == 0]
print(*a)