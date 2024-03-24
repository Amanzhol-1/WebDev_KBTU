def ans(x):
    for i in range(2, x + 1):
        if x % i == 0: return i

print(ans(int(input())))