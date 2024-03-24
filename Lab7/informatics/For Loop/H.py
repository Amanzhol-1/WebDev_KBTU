def ans(x):
    s = ""
    for i in range(1, x + 1):
        if x % i == 0: s += str(i) + " "
    return s

print(ans(int(input())))