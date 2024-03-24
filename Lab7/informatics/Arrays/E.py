def sign(x):
    if x > 0: return 1
    return -1

def sol():
    n = int(input())
    s = [int(i) for i in input().split()]
    for i in range(len(s)-1):
        if sign(s[i]) == sign(s[i+1]):
            print("YES")
            return
    print("NO")

sol()
        