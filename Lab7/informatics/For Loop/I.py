def ans(x):
    k = 1
    for i in range(1, int(x/2) + 1):
        if x % i == 0: k += 1
    return k

print(ans(int(input())))

