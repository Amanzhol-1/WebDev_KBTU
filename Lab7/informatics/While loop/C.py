n = int(input())
s = ""
i = 0
while(2**i <= n):
    s += str(2**i) + " "
    i += 1
print(s)