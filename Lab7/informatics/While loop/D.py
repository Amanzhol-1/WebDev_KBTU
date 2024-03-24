def sol(a):
    i = 0
    while 2**i <= n:
        if 2**i == n:
            print("YES")
            return
        i+=1
    print("NO")
    return


n = int(input())
sol(n)
